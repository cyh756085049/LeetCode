/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || nums.length <= 1) return nums;

    // 定义指针j指向不为0的数字
    let j = 0;
    // 指针i从下标0开始遍历，当当前值不为0时，和nums[j]进行交换，指针j自增，直到把所有的0移动到数组末尾
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i > j) {
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));