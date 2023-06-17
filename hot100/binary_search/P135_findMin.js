/**
 * 153. 寻找旋转排序数组中的最小值
 * 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    let min = Infinity;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        //  中间值大于右区间的值，则说明极小值必在右区间，极小值为nums[right]
        if (nums[mid] > nums[right]) {
            left = mid + 1;
            min = Math.min(min, nums[right]);
        } else {
            //  中间值小于右区间的值，右半段区间递增，极小值为nums[mid]
            right = mid - 1;
            min = Math.min(min, nums[mid]);
        }
    }

    return min;
};

/**
 * 输入：nums = [4,5,6,7,0,1,2]
 * 输出：0
 */

const nums = [4,5,6,7,0,1,2];
console.log(findMin(nums));