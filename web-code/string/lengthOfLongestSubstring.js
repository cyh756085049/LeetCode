/**
 * LeetCode 3. 无重复字符的最长子串
 * @param s
 * @returns {number}
 */
// 方法1：使用一个数组来维护滑动窗口，遍历字符串，判断字符是否在滑动窗口数组中，不在则 push 进数组在则删除滑动窗口
// 数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组，然后将 max 更新为当前最长子串的长度，最后返回 max 即可
function lengthOfLongestSubstring (s) {
    let res = [], max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = res.indexOf(s[i]);
        if (index !== -1) {
            res.splice(0, index + 1);
        }
        res.push(s[i]);
        max = Math.max(res.length, max);
    }
    return max;
}

// 方法2： map实现
function lengthOfLongestSubstring1 (s) {
    let map = new Map(), max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i);
        }
        max = Math.max(max, j - i + 1);
        map.set(s[j], j);
    }
    return max;

}


const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));
console.log(lengthOfLongestSubstring1(str));