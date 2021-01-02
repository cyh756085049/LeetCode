## 二分查找
### [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
#### 思路
二分查找
根据 mid^2 <= x 确定搜索范围为 [0, x]
当mid * mid === x return mid
当mid * mid < x 缩小搜索范围为 [mid + 1, r]
当mid * mid > x 缩小搜索范围为 [l, mid - 1]
#### 代码
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x, res = 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};
```
#### 复杂度
时间复杂度：O(logn)
空间复杂度：O(1)

### [278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)
#### 思路
二分查找
#### 代码
```js
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};
```
#### 复杂度
时间复杂度：O(logn)
空间复杂度：O(1)