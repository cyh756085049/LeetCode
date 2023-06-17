/**
 * 139. 单词拆分
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 状态定义 dp[i] 表示字符s[0，...i-1]即前i位是否能拆分成字典中出现的单词
    let dp = new Array(s.length + 1).fill(false);
    // 状态初始化 空字符可以被表示
    dp[0] = true;

    // 将数组字典保存在set中
    const workDictSet = new Set(wordDict);
    // 状态转移方程
    for (let end = 1; end <= s.length; end++) {
        for (let start = end - 1; start >= 0; start--) {
            // 分割当前遍历的首尾指针字符串，判断当前子串是否在字典中，并且开始子串之前[0,...start]是否为true
            const str = s.slice(start, end);
            // 如果条件存在，则从[0,...end]的子串可以拆分成单词，无需继续划分
            if (workDictSet.has(str) && dp[start]) {
                dp[end] = true;
                break;
            }
        }
    }

    // 返回结果
    return dp[s.length];
};

/**
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成
 */

const s = "leetcode", wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));
