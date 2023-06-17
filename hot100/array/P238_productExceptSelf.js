/**
 * 238. 除自身以外数组的乘积
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let leftProduct = 1, rightProduct = 1;
    // 从左到右遍历，当前数值左边的乘积
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // 从右向左遍历，当前数值右边的乘积
    for (let i = nums.length - 1; i > 0; i--) {
        rightProduct *= nums[i];
        res[i - 1] *= rightProduct;
    }

    return res;
};

/**
 * 输入: nums = [1,2,3,4]
 * 输出: [24,12,8,6]
 */

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));

