/**
 * 41. 缺失的第一个正数 https://leetcode.cn/problems/first-missing-positive/description/
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * @param {number[]} nums
 * @return {number}
 */
// 方式1：原地哈希：将数组视为哈希表，原地哈希，哈希规则：数值 i 的数映射到下标为 i - 1 的位置
// 题解：https://leetcode.cn/problems/first-missing-positive/solutions/7703/tong-pai-xu-python-dai-ma-by-liweiwei1419/
var firstMissingPositive = function(nums) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        // 满足在指定范围内，并且没有放在正确的位置上，才交换
        while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
            // 例如，数值3应该放在索引2的位置上
            swap(nums, nums[i] - 1, i);
        }
    }

    // 再次遍历数组，如果第一个遇到的值不等于下标的那个数，就是我们要找的缺失的第一个正数
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return len + 1;
};

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

/**
 * 方式2： 哈希表：将所有数字加入到哈希表中，然后从1开始枚举，检查哈希表中是否存在该数字，不存在则直接返回
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveII = function(nums) {
    let set = new Set();
    for (let num of nums) {
        set.add(num);
    }

    let num = 1;
    while (true) {
        if (set.has(num)) {
            num++;
        } else {
            return num;
        }
    }
}

/**
 * 输入：nums = [1,2,0]
 * 输出：3
 */

const nums = [1,2,0];
console.log(firstMissingPositive(nums));
console.log(firstMissingPositiveII(nums));