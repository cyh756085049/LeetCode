/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = searchLeft(nums, target);
    if (left === -1) {
        return [-1, -1];
    }

    let right = searchRight(nums, target);
    return [left, right];
}

// 二分搜索左边界
const searchLeft = (nums, target) => {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            // 搜索左边界，已经找到，继续向左找
            right = middle - 1;
        }
    }

    // left 一直是向右的，如果最后越界或者未找到目标值，则返回 -1，否则返回左边界 left
    if (left === nums.length || nums[left] !== target) {
        return -1;
    }

    return left;
}

// 二分搜索右边界
const searchRight = (nums, target) => {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            // 搜索右边界，如果已经找到，继续向右找
            left = middle + 1;
        }
    }

    // right 一直是向左的，如果最后越界或者未找到目标值，则返回 -1，否则返回右边界 right
    if (right === -1 || nums[right] !== target) {
        return -1;
    }

    return right;
}

/**
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 */

const nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums, target));