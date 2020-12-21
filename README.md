# LeetCode
每日算法题及笔试面试手撕算法题整理
### []()
#### 思路

#### 代码
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    dfs([], nums, res);
    return res;
};

function dfs(arr, nums, res) {
    const visit = new Array(nums.length);
    if (arr.length === nums.length) {
        res.push(arr.slice());
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] === nums[i] && i - 1 >= 0 && !visit[i - 1]) {
            continue;
        }
        if (visit[i]) {
            continue;
        }
        arr.push(nums[i]);
        visit[i] = true;
        dfs(arr);
        arr.pop();
        visit[i] = false;
    }
}

console.log(permuteUnique([1,2,3]));
```
#### 复杂度
时间复杂度：O()
空间复杂度：O()