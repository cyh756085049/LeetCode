/**
 * 5. 最长回文子串 https://leetcode.cn/problems/longest-palindromic-substring/description/
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * @param {string} s
 * @return {string}
 */

// 方式1：双指针，中心扩散法
var longestPalindrome = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        // 寻找长度为奇数的回文子串，以当前元素向两边扩散
        const s1 = palindrome(s, i, i);
        // 寻找长度为偶数的回文串
        const s2 = palindrome(s, i, i + 1);
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }

    return res;
};

// 左右指针，寻找回文子串
const palindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

// 方式2：动态规划 https://leetcode.cn/problems/longest-palindromic-substring/solutions/7792/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/
var longestPalindromeII = function(s) {
    const length = s.length;
    // 如果字符串长度小于2，直接返回该字符串
    if (length < 2) {
        return s;
    }
    // 定义一个表示回文串最大长度
    let maxLength = 1;
    // 回文子串的开始索引
    let start = 0;

    // 状态定义：dp[i][j] 表示字符串 s[i...j] 是否是回文子串
    const dp = new Array(length).fill().map(_ => new Array(length));

    // 单个字符本身就是回文串
    for (let i = 0; i < length; i++) {
        dp[i][i] = true;
    }

    // 递归遍历二维数组对角线上方的所有元素，因为s[i..j] 表示 s 的一个子串，因此 i <= j，只需要填这张表格对角线以上的部分
    for (let j = 1; j < length; j++) {
        for (let i = 0; i < j; i++) {
            // 两个字符不相等，说明不是回文子串
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                // 当子串的左右两边字符相同，且字符的个数小于等于3时，就是回文串，如奇数串 aba, 偶数串 aa
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            // 当前是子串是回文串并且子串长度大于之前的最大值，则更新最大长度和回文串的开始位置索引
            if (dp[i][j] && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                start = i;
            }
        }
    }
    // 返回结果 字符串的最大长度子串回文串
    return s.slice(start, start + maxLength);
}

/**
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 */

const s = 'babad';
console.log(longestPalindrome(s));
console.log(longestPalindromeII(s));