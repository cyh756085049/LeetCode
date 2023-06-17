/**
 * 53. 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 状态定义：maxSubArrayDP[i] 表示以i为结尾的连续子数组的最大和
    const maxSubArrayDP = [];

    // 定义初始条件
    maxSubArrayDP[0] = nums[0];
    let maxSubArray = nums[0];

    // 根据状态转移方程进行状态转移
    for (let i = 1; i < nums.length; i++) {
        maxSubArrayDP[i] = Math.max(nums[i] + maxSubArrayDP[i - 1], nums[i]);
        maxSubArray = Math.max(maxSubArray, maxSubArrayDP[i]);
    }

    // 返回结果
    return maxSubArray;
};

/**
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 */

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));