## 二分查找
### [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
#### 思路
二分查找
根据 mid^2 <= x 确定搜索范围为 [0, x]
当mid * mid === x return mid
当mid * mid < x 缩小搜索范围为 [mid + 1, r]
当mid * mid > x 缩小搜索范围为 [l, mid - 1]
#### 代码
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, res = 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};
```
#### 复杂度
时间复杂度：O(logn)
空间复杂度：O(1)

### [278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)
#### 思路
二分查找
#### 代码
```js
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};
```
#### 复杂度
时间复杂度：O(logn)
空间复杂度：O(1)

### [162. 寻找峰值](https://leetcode-cn.com/problems/find-peak-element/)
#### 思路
二分查找：比较nums[mid]与nums[mid + 1]的大小，如果出现nums[mid] > nums[mid + 1]， 峰值在左侧，反之峰值在右侧
#### 代码
```js
var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
```
#### 复杂度
时间复杂度：O(logn)
空间复杂度：O(1)

### [1712. 将数组分成三个子数组的方案数](https://leetcode-cn.com/problems/ways-to-split-array-into-three-subarrays/)
#### 思路
二分查找+前缀和
#### 代码
```js
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
```
#### 复杂度
时间复杂度：O(nlog(n))
空间复杂度：O(n)