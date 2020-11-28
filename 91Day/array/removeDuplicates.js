/**
 * 26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0, fast = 0;
    while (slow < nums.length) {
        if (nums[fast] !== nums[slow]) {
            fast++;
            nums[fast] = nums[slow];
        }
        slow++;
    }
    return fast + 1;
};
