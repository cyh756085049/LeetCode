/**
 * 31. 下一个排列 https://leetcode.cn/problems/next-permutation/description/
 *
 *思路：下一个排列总要比当前排列大，除非该排列已经是最大的排列，我们希望找到一个算法，实现能够找到
 * 一个大于当前序列的新序列，且变大的幅度尽可能小，具体方法：
 *  1、我们需要将一个左边的【较小数】和一个右边的【较大数】交换，以能够让当前排列变大，从而得到下一个排列。
 *  2、同时让【较小数】尽量靠右，而【较大数】尽可能小，当交换完成后，【较大数】右边的数需要按照升序重新排列，
 *      这样可以保证新排列大于原来排列的情况上，使变大的幅度尽可能小。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    // 从后向前查找【较小数】
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // 在区间【i + 1， nums.length - 1】从后向前找 nums[i] < 当前元素的索引，找到【较大数】
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) {
            j--;
        }
        // 交换【较小数】和【较大数】
        swap(nums, i, j);
    }
    // 反转，【i+1，nums.length - 1】区间是降序
    reverse(nums, i + 1);
};

// 交换两个值
const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// 反转后半段
const reverse = (nums, start) => {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
        swap(nums, left, right);
        left++;
        right--;
    }
}



