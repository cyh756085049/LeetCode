/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const text1Length = text1.length;
    const text2Lenth = text2.length;

    // 状态定义：dp[i][j] 表示 text1[0...i],text2[0...j] 最长公共子序列的长度
    const dp = new Array(text1Length + 1).fill(0).map(_ => new Array(text2Lenth + 1).fill(0));

    for (let i = 1; i <= text1Length; i++) {
        for (let j = 1; j <= text2Lenth; j++) {
            // 如果当前两个字符相等，则长度加1
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[text1Length][text2Lenth];
};

/**
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 */

const text1 = "abcde", text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));