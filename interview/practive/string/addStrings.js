/**
 * 415. 字符串相加 https://leetcode.cn/problems/add-strings/description/
 * 题解：https://github.com/sisterAn/JavaScript-Algorithms/issues/32
 * 复杂度：时间复杂度 O(max(nums1.length, nums2.length)) 空间复杂度：o(1)
 * @param nums1
 * @param nums2
 */
const addStrings = (nums1, nums2) => {
    let num1Length = nums1.length, num2Length = nums2.length;
    let res = '';
    // 保存进位
    let carry = 0;

    while (num1Length || num2Length) {
        if (num1Length) {
            num1Length--;
            carry += +nums1[num1Length];
        }

        if (num2Length) {
            num2Length--;
            carry += +nums2[num2Length];
        }

        res = carry % 10 + res;
        if (carry > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
    }

    if (carry) {
        res = res + 1;
    }

    return res;
}

const num1 = "11", num2 = "123";
console.log('字符串相加', addStrings(num1, num2));