/**
 * 763. 划分字母区间
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 * 返回一个表示每个字符串片段的长度的列表。
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // 记录字符串中每个字符最后出现的位置索引
    let strLastIndex = {};
    for (let i = 0; i < s.length; i++) {
        console.log(s.charAt(i));
        strLastIndex[s[i]] = i;
    }
    console.log('strLastIndex', strLastIndex);
    // 记录搜索区间字符串待切割的开始位置
    let first = 0;
    // 记录搜索区间字符串待切割的结尾位置
    let last = 0;
    // 记录每个字符串片段的长度的列表
    let partitions = [];
    for (let currentPosition = 0; currentPosition < s.length; currentPosition++) {
        // 当前字符可以出现的最远位置的索引
        const lastPosition = strLastIndex[s[currentPosition]];
        // 更新划分区间字符最后出现的位置
        last = Math.max(last, lastPosition);
        // 当前字符索引正好等于更新的字符的最远距离，进行一次分割
        if (currentPosition === last) {
            partitions.push(last - first + 1);
            // 更新下一次分割的开始位置
            first = last + 1;
        }
    }
    return partitions;
};

/**
 * 输入：s = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。
 */

const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));