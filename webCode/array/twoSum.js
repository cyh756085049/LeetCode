/**
 * 两数之和
 * 给定一个整数数组 nums 和一个目标值 target ，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 * @param nums
 * @param target
 * @returns {(any|number)[]|*[]}
 */
function twoSum(nums, target) {
    if (nums === null) return [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i];
        if (map.has(num)) {
            return [map.get(num), i];
        }
        map.set(nums[i], i);
    }
}

let nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));