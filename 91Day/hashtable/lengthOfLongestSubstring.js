/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let index = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            index = Math.max(map.get(s[i]) + 1, index);
        }
        max = Math.max(max, i - index + 1);
        map.set(s[i], i);
    }
    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));