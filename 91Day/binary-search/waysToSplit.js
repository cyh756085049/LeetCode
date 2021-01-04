/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
    let n = nums.length;

    // 前缀和数组
    let preSum = Array(n).fill(0);
    preSum[0] = nums[0];
    for (let i = 1; i < n; i++) {
        preSum[i] = nums[i] + preSum[i - 1];
    }

    let result = 0;
    // 第一个分隔点最大点取值
    let firstMax = Math.floor(preSum[n - 1] / 3);
    // 第一个分隔点的取值
    for (let i = 0; i < n && preSum[i] <= firstMax; i++) {
        // 第2个分隔点的左边界
        let left = getLeft(i + 1, n - 1, preSum, 2 * preSum[i]);
        // 第2个分隔点的右边界
        let right = getRight(i + 1, n - 1, preSum, preSum[i] + ((preSum[n - 1] - preSum[i]) / 2));
        if (right >= left) {
            result += right - left + 1;
        }
    }

    let mod = Math.pow(10, 9) + 7;
    return Math.floor(result % mod);
};
/**
 * 找到第2个分隔点左边界
 * @param {*} left
 * @param {*} right
 * @param {*} preSum 前缀和数组
 * @param {*} target 要查找的目标值
 */
var getLeft = function (left, right, preSum, target) {
    while (left < right) {
        let mid = Math.floor(left + ((right - left) >> 1));
        if (preSum[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }
    return left;
}

/**
 * 找到第2个分隔点的右边界
 * @param {*} left
 * @param {*} right
 * @param {*} preSum 前缀和数组
 * @param {*} target 要查找的目标值
 */
var getRight = function (left, right, preSum, target) {
    while (left < right) {
        let mid = Math.floor(left + ((right - left) >> 1));
        if (preSum[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left - 1;
}