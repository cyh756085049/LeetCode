/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        let middle = Math.floor(left + (right - left) / 2);
        if (nums[middle] === target) return middle;
        if (nums[middle] < target) {
            left = middle;
        } else {
            right = middle;
        }
    }
    return left;
};