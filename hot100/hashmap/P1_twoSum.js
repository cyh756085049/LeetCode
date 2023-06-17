/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 使用哈希表实现
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};

/**
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 */

const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target));
