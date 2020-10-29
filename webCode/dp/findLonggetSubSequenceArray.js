/**
 * LeetCode 1143. 最长公共子序列
 * @param a
 * @param b
 */
function longestCommonSubsequence(a, b) {
    let n = a.length;
    let m = b.length;
    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    return dp[n][m];
}

function findLonGetSubSequenceArray(a, b) {
    this.dp = function (i, j) {
        // 有一个字符串为空字符串
        if (i === -1 || j === -1) {
            return 0;
        }
        // 相等即找到一个公共字符，加1后继续向前查找
        if (a[i] === b[j]) {
            return this.dp(i - 1, j - 1) + 1;
        } else {
            // 没有找到公共字符，则判断是移动哪个指针能使lcs更长
            return Math.max(this.dp(i - 1, j), this.dp(i, j - 1), this.dp(i - 1, j - 1));
        }
    }
    // 从后往前遍历
    return this.dp(a.length - 1, b.length - 1);
}

var a = [2,3,4,1,2]
var b = [4,1,2,5,7]

console.log(findLonGetSubSequenceArray(a, b));
console.log(longestCommonSubsequence(a, b));

var obj = {
    foo: 'bar',
    baz: 42
}
// ES5
var arr = [];
for (var i in obj) {
    arr.push(i);
}
console.log(arr);
// ES6
const array = Object.keys(obj);
console.log(array);