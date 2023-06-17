/**
 * 300. 最长递增子序列
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 定义一个用来保存最长严格递增子序列长度的变量
    let maxLength = 1;
    // 状态定义：dp[i]表示数组第i位能组成的最长严格递增子序列的长度
    let dp = new Array(nums.length);
    // 状态初始化
    dp[0] = 1;
    // 状态转移方程，遍历整数数组
    for (let i = 1; i < nums.length; i++) {
        // 求最长递增子序列的长度，则初始化dp[i]为最小值1
        dp[i] = 1;
        // 枚举 [j,..i]之间的所有数字
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(dp[i], maxLength);
    }

    // 返回结果
    return maxLength;
};

/**
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */

nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));