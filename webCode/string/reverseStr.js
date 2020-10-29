/**
 * LeetCode151：翻转字符串里的单词
 * 输入: "  hello world!  "
 * 输出: "world! hello"
 * @param str
 * @returns {string}
 */
function reverseStr(str) {
    return str.split(' ').filter(item => item).reverse().join(' ');
}


const str = "the sky is blue!";
console.log(reverseStr(str));