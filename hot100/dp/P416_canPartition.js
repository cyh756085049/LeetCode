/**
 * 416. 分割等和子集 https://leetcode.cn/problems/partition-equal-subset-sum/description/
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 先求数组的和
    const sum = nums.reduce((previousValue, curValue) => previousValue + curValue, 0);
    if (sum % 2 !== 0) {
        return false;
    }
    // 计算数组和的一半
    const target = sum / 2;
    // 状态定义：dp[i][j] 表示以[0, ..., i - 1]这 i 个数字的和能否组成数字j
    let dp = new Array(nums.length).fill(false).map(item => new Array(target + 1).fill(false));
    // 状态初始化
    dp[0][0] = true;
    if (nums[0] <= target) {
        dp[0][nums[0]] = true;
    }

    // 状态转移
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= nums[i]) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
            }
        }
    }

    return dp[nums.length - 1][target];
};

/**
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 */

const nums = [1,5,11,5];
console.log(canPartition(nums));