/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
        if (i === k - 1) {
            return nums[i];
        }
    }
};

let nums = [3,2,3,1,2,4,5,5,6];
console.log(findKthLargest(nums, 4));