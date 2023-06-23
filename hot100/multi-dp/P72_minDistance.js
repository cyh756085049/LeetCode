/**
 * 72. 编辑距离
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const word1Length = word1.length;
    const word2Length = word2.length;

    // 状态定义：dp[i][j] 表示将word1 的前 i 个字符转变为 word2 的前 j 个字符所需要的最少操作次数
    const dp = new Array(word1Length + 1).fill(0).map(_ => new Array(word2Length + 1).fill(0));

    // word1一个字母也没有，全增
    for (let col = 1; col <= word2Length; col++) {
        dp[0][col] = col;
    }

    // word2一个字母也没有，删除
    for (let row = 1; row <= word1Length; row++) {
        dp[row][0] = row;
    }

    for (let i = 1; i <= word1Length; i++) {
        for (let j = 1; j <= word2Length; j++) {
            // 如果word1和word2的字符相等，则不需要进行任何操作，操作次数与之前相同
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 取增删改操作次数的最小值
                const insert = dp[i - 1][j] + 1;
                const del = dp[i][j - 1] + 1;
                const replace = dp[i - 1][j - 1] + 1;
                dp[i][j] = Math.min(insert, del, replace);
            }
        }
    }

    return dp[word1Length][word2Length];
};

/**
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 */

const word1 = "horse", word2 = "ros";
console.log(minDistance(word1, word2));
