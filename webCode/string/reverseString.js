/**
 * LeetCode 344. 反转字符串
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * @param s
 * @returns {*}
 */
// 思路： 双指针 + 解构赋值   从队头和队尾向中间逼近，用解构赋值交换值
var reverseString = function (s) {
    var i = 0, j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}

const s = ["h","e","l","l","o"];
console.log(reverseString(s));


// 翻转字符串
function reverse(str) {
    return str.split('').reverse().join("");
}

function reverse1(str) {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}