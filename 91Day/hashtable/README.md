## 哈希表
### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)
#### 思路
使用map数据结构。首先遍历数组，判断map中是否存在目标值减去当前遍历值的值，如果存在，
直接返回，如果不存在，在map中添加当前遍历值。
#### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let res = target - nums[i];
        if (map.has(res)) {
            return [i, map.get(res)];
        }
        map.set(res, i);
    }
};
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)
### [215. 数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
#### 思路
首先对数组进行降序排序，然后遍历排序后的数组，当索引等于k - 1时，则返回该数值，即是数组中第k个最大元素。
#### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};
```
#### 复杂度
时间复杂度：O(nlog(n))
空间复杂度：O(n)
### [447. 回旋镖的数量](https://leetcode-cn.com/problems/number-of-boomerangs/)
#### 思路
两次循环遍历，使用哈希表记录每个点到自己的距离。
查看有多少相同距离，只有当相同大于1时，这个时候才可以形成回旋镖。 每次新增 一个一样的距离 回旋镖新增 2n 个
#### 代码
```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0;
    for(let i = 0; i < points.length; i++) {
        let map = new Map();
        for(let j = 0; j < points.length; j++) {
            if (i !== j) {
                let dis = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
                if (!map.has(dis)) {
                    map.set(dis, 1);
                } else {
                    res += map.get(dis) * 2;
                    map.set(dis, map.get(dis) + 1);
                }
            }
        }
    }
    return res;
};
```
#### 复杂度
时间复杂度：O(n^2)
空间复杂度：O(n^2)
### [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
#### 思路
使用map数据结构，key存储字符，value存储遍历字符串的下标，定义index为无重复子串的开始下标，初始值为0，
遍历字符串，当map中已经存在当前字符时，更新开始下标为相同字符的下一位置，更新最大长度max，将当前字符放
入map中，最后返回max。
#### 代码
```js
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
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)
### [30. 串联所有单词的子串](https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/)
#### 思路
由于子串不需要考虑 words 中单词出现的顺序，并且words中可能会出现重复单词，所以不能用 set 来存储words，我们可以用map来存储words，把words中的单词作为key，单词出现的次数作为value
循环字符串s，然后每次从字符串s中截取一段长度为 words 单词总长的字符串，然后按照单个words单词的长度，对其进行拆分成单词
使用拆分后的单词去map中查询，如果存在，则将其 value - 1，否则表明当前字符串不符合要求，直接break跳出当前循环
内层循环结束后，如果map所有的 value 都为0，则表明当前子字符串符合要求，将其起始索引放入结果集中
最后返回结果集
#### 代码
```js
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
```
#### 复杂度
时间复杂度：O(mn)，m为words一个单词的长度，n为s的长度
空间复杂度：O(m+n)，m为words一个单词的长度，n为s的长度
> 参考：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/js-bao-li-qiu-jie-yu-hua-dong-chuang-kou-jie-fa-ji/
### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()