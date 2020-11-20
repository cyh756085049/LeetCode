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