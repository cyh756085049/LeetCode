/** 暴力解法，双层循环
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) { // 找到需要移除的数组，将数组集体向前移一位
            for (let j = i + 1; j < length; j++) {
                nums[j - 1] = nums[j];
            }
            i--;
            length--;
        }
    }

    return length;
};

console.log(removeElement([3, 2, 2, 3], 3));