/**
 * 35. 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * @param nums
 * @param target
 */
const searchInsert = (nums, target) => {
    // 使用二分搜索查找，从中间位置不断二分
    if (!nums || nums.length === 0) {
        return 0;
    }

    /**
     4种情况
        1、目标值在数组最前
        2、目标值是数组中某个值
        3、目标值是数组中某两个值之间
        4、目标值在数组之后
     */
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle;
        }
    }

    return left;
    // return right + 1;
}

/**
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 */

const nums = [1,3,5,6], target = 4;
console.log(searchInsert(nums, target));