## 滑动窗口
### [1456. 定长子串中元音的最大数目](https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
#### 思路
滑动窗口判断左右窗口元素是否为元音字母，并记录
#### 代码
```js
var maxVowels = function(s, k) {
    const vowels = {a: true, e: true, i: true, o: true, u: true
    }
    let i = 0, count = 0, max = 0;
    while (i < s.length) {
        if (i < k) {
            if (vowels[s[i]]) count++;
        } else {
            if (vowels[s[i]]) count++;
            if (vowels[s[i - k]]) count--;
        }
        i++;
        max = Math.max(max, count);
    }
    return max;
};
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(1)