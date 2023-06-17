/**
 * 剑指 Offer 42. 连续子数组的最大和
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 *
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

const maxSubArray = function (nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    console.log('原始数组：', nums);
    let maxValue = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 取数组第i-1个元素和0的最大值，然后结果加上当前数组i元素的值，得到当前连续子数组的和
        nums[i] += Math.max(nums[i - 1], 0);
        // 比较当前连续数组的和与之前保存保存的最大值比较
        maxValue = Math.max(maxValue, nums[i]);
    }

    console.log('动态规划后得到的新数组：', nums);
    return maxValue;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
