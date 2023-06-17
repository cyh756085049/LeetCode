/**
 * 189. 轮转数组
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 防止k大于nums数组的长度，数组越界，也可以减少翻转次数
    k %= nums.length;
    // 整个数组翻转
    reverse(nums, 0, nums.length - 1);
    // 前k个元素翻转
    reverse(nums, 0, k - 1);
    // k之后的元素翻转
    reverse(nums, k, nums.length - 1);
    return nums;
};

/**
 * 翻转数组
 * @param nums
 * @param start 开始索引
 * @param end 结束索引
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

/**
 *
 * @type {number[]}
 */
const nums = [1,2,3,4,5,6,7];
console.log(rotate(nums, 3));