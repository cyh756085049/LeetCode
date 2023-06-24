/**
 * 76. 最小覆盖子串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) {
        return '';
    }

    // 存储 s 和 t 中每个字符及其出现的次数
    let sCharAndCount = new Map();
    let tCharAndCount = new Map();

    // 初始化 字符串t 的哈希表，统计 t 串词频
    for (let i = 0; i < t.length; i++) {
        tCharAndCount.set(t[i], (tCharAndCount.get(t[i]) || 0) + 1);
    }

    // 保存结果子串
    let resStr = '';
    // 最小覆盖子串的长度
    let minLength = Number.MAX_VALUE;
    // s 中与 t 串已成功匹配的数量
    let counter = 0;

    // 滑动窗口
    for (let left = 0, right = 0; right < s.length; right++) {
        // 统计 s 串的词频
        sCharAndCount.set(s[right], (sCharAndCount.get(s[right]) || 0) + 1);

        // 如果子串 t 中包含该字符，并且 s 中出现这个字符的数量还没有达到子串 t 中所需的数量
        if (tCharAndCount.has(s[right]) && sCharAndCount.get(s[right]) <= tCharAndCount.get(s[right])) {
            counter++;
        }

        // 滑动窗口左边界
        // 如果 左边界小于右边界，且（子串 t 中不包含左边界字符或者s串中出现的左边界字符数量 大于 子串 t中包含的左边界字符数量）
        while (left < right && (!tCharAndCount.has(s[left]) || sCharAndCount.get(s[left]) > tCharAndCount.get(s[left]))) {
            const count = sCharAndCount.get(s[left]) - 1;
            sCharAndCount.set(s[left], count);
            left++;
        }

        // 更新最小子串长度
        if (counter === t.length && right - left + 1 < minLength) {
            minLength = right - left + 1;
            resStr = s.substring(left, right + 1);
        }
    }
    return resStr;
};

/**
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 */

const s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t));