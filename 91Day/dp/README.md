## 动态规划问题
### [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
#### 思路
与斐波那契数列类似，使用动态规划解决。
#### 代码
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    let second = 2;
    if (n === 1) return first;
    if (n === 2) return second;
    for (let i = 2; i < n; i++) {
        let thrid = first + second;
        first = second;
        second = thrid;
    }
    return second;
};
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(1)