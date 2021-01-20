### 背包问题
### [416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)
#### 思路
计算nums的总和，总和sum为奇数的话就不能分为两个相同大小的数组
用背包找出数组中为sum一半的组合，价值和重量都是num
所以答案是重量为target的价值是否为target
#### 代码
```js
/**
 * 416. 分割等和子集
 * @param nums
 * @returns {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((pre, num) => pre + num, 0);
    if (sum % 2 === 1) return false;
    const target = sum / 2;
    let dp = new Array(target + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[target] === target;
}
```
#### 复杂度
时间复杂度：O(n * target)
空间复杂度：O(n)