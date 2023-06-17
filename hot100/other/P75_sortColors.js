/**
 * 75. 颜色分类
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 *
 * 荷兰国旗问题
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // p1指针表示红色0， p2指针表示白色1
    let p1 = 0, p2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(nums, i, p1);
            if (p1 < p2) {
                swap(nums, i, p2);
            }
            p1++;
            p2++;
        } else if (nums[i] === 1) {
            swap(nums, i, p2);
            p2++;
        }
    }

    return nums;
};

const swap = (nums, i ,j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

/**
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 */

const nums = [2,0,2,1,1,0];
console.log(sortColors(nums));