/**
 * 三数之和为0
 * 按照两数之和的思路，遍历数组，选定一个数作为三数之和的第一个数，
 * 然后题目就换成了在 i+1 到 nums.length-1 中两数之和问题
 * @param nums
 * @returns {[]}
 */
// 没有去重，存在重复元组
function threeSum(nums) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        // 第一个数
        let first = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            // 第三个数
            let third = 0 - nums[j] - first;
            if (map.has(third)) {
                result.push([first, nums[j], third]);
            }
            map.set(nums[j], j);
        }
        map.clear();
    }
    return result;
}

// 排序+双指针
function threeSum1(nums) {
    // 三数之和为o，长度应该大于等于3
    if (!nums || nums.length < 3) return [];
    let result = [], second, last;
    // 排序
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // 已拍好序的数组，如果第一个数大于0，则跳出
        if (nums[i] > 0) break;
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        second = i + 1;
        last = nums.length - 1;
        while (second < last) {
            const sum = nums[i] + nums[second] + nums[last];
            if (!sum) {
                result.push([nums[i], nums[second], nums[last]]);
                while (second < last && nums[second] === nums[second + 1]) second++;
                while (second < last && nums[last] === nums[last - 1]) last--;
                second++;
                last--;
            } else if (sum < 0) {
                second++;
            } else if (sum > 0) {
                last--;
            }
        }
    }
    return result;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
console.log(threeSum1(nums));