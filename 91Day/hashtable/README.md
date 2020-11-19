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