/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 使用哈希 map 保存数组中不重复的字符
    let map = new Map();
    // 设置滑动窗口左指针
    let index = 0;
    // 保存滑动窗口无重复最长子串长度
    let max = Number.MIN_VALUE;
    for (let i = 0; i < s.length; i++) {
        // map中已经包含了当前遍历到的字符，则更新滑动窗口左指针
        if (map.has(s[i])) {
            index = Math.max(index, map.get(s[i]) + 1);
        }
        // 更新最大值，i- index + 1 表示当前滑动窗口的长度
        max = Math.max(max, i - index + 1);
        // 如果当前值在map中已经存在，更新当前map中保存的下标枳，如果当前值不存在，保存当前的值及下标
        map.set(s[i], i);
    }

    return max;
};

/**
 * 输入: s = "abcabcbb"
 * 输出: 3
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 */

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));