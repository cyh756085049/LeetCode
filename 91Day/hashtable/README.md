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
### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()
### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()