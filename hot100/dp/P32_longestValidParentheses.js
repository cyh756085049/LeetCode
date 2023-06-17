/**
 * 32. 最长有效括号
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * @param {string} s
 * @return {number}
 */

// 用栈实现
var longestValidParentheses = function(s) {
    // 用栈保存字符串遍历到的左括号的下标
    let stack = [];
    // 栈底元素，已经遍历过的字符中，最后一个没有被匹配的右括号的下标 ？
    stack.push(-1);
    // 保存最长有效括号子串的长度
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
};

/**
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 */

// const s = ")()())";
const s = "(()";
console.log(longestValidParentheses(s));