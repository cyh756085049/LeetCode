/** 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] * nums[i]);
    }

    return Math.max(...dp);
};

console.log(maxProduct([2,3,-2,4]));