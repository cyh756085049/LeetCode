/**
 * 30. 串联所有单词的子串
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // 先对words进行一个全排列，拼接成一个字符串，然后使用滑动窗口遍历字符串s与words进行匹配
    if (!words || !words.length) return [];
    let wordLen = words[0].length;
    let allWordsLen = wordLen * words.length;
    let map = {}, res = [];
    for (let word in words) {
        map[word] ? map[word]++ : map[word] = 1
    }
    for (let i = 0; i < s.length - allWordsLen + 1; i++) {
        let wordMap = Object.assign({}, map);
        for (let j = i; j < i + allWordsLen - wordLen + 1; j+=wordLen) {
            let w = s.slice(j, j + wordLen);
            if (wordMap[w]) {
                wordMap[w]--;
            } else {
                break;
            }
        }
        if (Object.values(wordMap).every(n => n === 0))
            res.push(i);
    }
    return res;
};

var findSubstring = function(s, words) {
    if (!words || !words.length) return[];
    let wordLen = words[0].length;
    let allWordsLen = wordLen * words.length;
    let ans = [], wordMap = {};
    for (let w of words) {
        wordMap[w] ? wordMap[w]++ :wordMap[w] = 1
    }
    for (let i = 0; i < s.length - allWordsLen + 1; i++) {
        let wm = Object.assign({}, wordMap);
        for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
            let w = s.slice(j, j + wordLen);
            if (wm[w]) {
                wm[w]--
            } else {
                break;
            }
        }
        if (Object.values(wm).every(n => n === 0)) ans.push(i);
    }
    return ans;
};
