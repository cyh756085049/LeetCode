/**
 * 66. 加一
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    // 逆序遍历数组
    for (let i = len - 1; i >= 0; i--) {
        // 如果数组最后一位数字不为9，则直接对数组最后一位数字加1,然后返回数组
        if (digits[i] !== 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else { // 否则，当数组最后一位数字为9时，则把值置为0，然后继续执行循环判断
            digits[i] = 0;
        }
    }
    // 最后，数组遍历结束，说明最高位仍然为9，需要进位，在数组头部添加1
    digits.unshift(1);
    return digits;
};

console.log(plusOne([8,9,9]));