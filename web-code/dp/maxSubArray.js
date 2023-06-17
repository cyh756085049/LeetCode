/**
 * leetcode53：最大子序和
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * @param nums
 * @returns {*}
 */
// 1、动态规划
function maxSubArray(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] += Math.max(nums[i - 1], 0);
        res = Math.max(res, nums[i]);
    }
    return res;
}


function maxSubArray1(nums) {
    let max = nums[0];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}


const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
console.log(maxSubArray1(nums));
