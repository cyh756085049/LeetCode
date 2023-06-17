/**
 * 560. 和为 K 的子数组
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const len = nums.length;
    // 构建前缀和
    const preSum = [];
    preSum[0] = 0;
    for (let i = 0; i < len; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }

    // 和为k的连续子数组的数量
    let count = 0;
    for (let left = 0; left < len; left++) {
        for (let right = left; right < len; right++) {
            if (preSum[right + 1] - preSum[left] === k) {
                count++;
            }
        }
    }

    return count;
};

/**
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 */

const nums = [1,2,3];
console.log(subarraySum(nums, 3));