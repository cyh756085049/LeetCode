/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.set(nums[i], map.get(nums[i]) + 1);
    //     } else {
    //         map.set(nums[i], 1);
    //     }
    // }
    //
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.get(nums[i]) > Math.floor(nums.length / 2)) {
    //         return nums[i];
    //     }
    // }

    const res = nums.sort((a, b) => a - b);
    const i = Math.floor(nums.length / 2);
    return res[i];
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
console.log(majorityElement([3,2,3]));