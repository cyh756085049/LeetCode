/**
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 参考：https://leetcode.cn/problems/generate-parentheses/solutions/418884/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/
    const res = [];
    // 左括号数量、右括号数量、当前构建的字符串
    const dfs = (leftRemain, rightRemain, str) => {
        // 字符串构建完成
        if (str.length === 2 * n) {
            res.push(str);
            // 结束当前递归分支
            return;
        }

        // 只要左括号有剩余，就可以选它
        if (leftRemain > 0) {
            dfs(leftRemain - 1, rightRemain, str + '(');
        }

        // 右括号比左括号剩余的多，才能选右括号
        if (leftRemain < rightRemain) {
            dfs(leftRemain, rightRemain - 1, str + ')');
        }
    }

    // 递归入口，剩余数量都是n,初始字符串是空串
    dfs(n, n, '');
    return res;
};

/**
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */

const n = 3;
console.log(generateParenthesis(n));