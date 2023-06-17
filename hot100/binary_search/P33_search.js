/**
 * 33. 搜索旋转排序数组
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
 * 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 *
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;

        // 如果中间节点的值和目标值相等，则直接返回
        if (nums[mid] === target) {
            return mid;
        }
        // 如果中间节点的值和目标值不相等，则需要判断中间节点左侧和右侧是否是升序数组
        if (nums[mid] < nums[right]) {
            // 如果中间节点的值小于目标值，且目标值小于右指针的值，则说明右侧是有序数组，修改左区间，缩小范围，否则，修改右区间
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            // 如果中间节点的值大于目标值，且目标值大于左指针的值，则说明左侧是有序数组，修改右区间，缩小范围，否则，修改左区间
            if (nums[mid] > target && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
};

/**
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 */

const nums = [4,5,6,7,0,1,2], target = 0;
console.log(search(nums, target));