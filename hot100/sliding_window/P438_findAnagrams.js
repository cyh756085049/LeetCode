/**
 * 438. 找到字符串中所有字母异位词
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 做法1：维护两个哈希表
var findAnagrams = function(s, p) {
    // 剪枝
    if (s.length < p.length) {
        return [];
    }

    // 用哈希表保存 P 的词频
    const map = new Map();
    for (let i = 0; i < p.length; i++) {
        map.set(p[i], map.get(p[i]) ? map.get(p[i]) + 1 : 1);
    }

    // 定义左右指针
    let left = 0, right = 0;

    // 定一个新map哈希表保存在s中遍历的异或词
    let map2 = new Map();
    // 更新当前滑动窗口的值的长度
    let count = 0;
    // 定义结果数组
    let res = [];
    // 异位词的判断：窗口的大小和p的长度相同，且字符出现的次数也相同
    while (right < s.length) {
        const curRightStr = s[right];
        right++;

        if (map.has(curRightStr)) {
            map2.set(curRightStr, map2.get(curRightStr) ? map2.get(curRightStr) + 1 : 1);

            if (map.get(curRightStr) === map2.get(curRightStr)) {
                count++;
            }
        }

        while (right - left >= p.length) {
            if (count === map.size) {
                res.push(left);
            }

            let curLeftStr = s[left];
            if (map.has(curLeftStr)) {
                if (map.get(curLeftStr) === map2.get(curLeftStr)) {
                    count--;
                }
                map2.set(curLeftStr, map2.get(curLeftStr) - 1);
            }
            left++;
        }
    }

    return res;
};



/**
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 */

const s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));