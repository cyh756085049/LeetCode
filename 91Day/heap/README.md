### [378. 有序矩阵中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/)
#### 思路
参考官方题解
#### 代码
```js
var kthSmallest = function(matrix, k) {
    if (matrix.length < 1) return null;
    let start = matrix[0][0];
    let end = matrix[matrix.length - 1][matrix[0].length - 1];
    while (start < end) {
        const mid = start + ((end - start) >> 1);
        const count = notGreaterCount(matrix, mid);
        if (count < k) start = mid + 1;
        else end = mid;
    }
    // 返回start,mid, end 都一样
    return start;
};
function notGreaterCount(matrix, k) {
    let cur = 0;
    const col = matrix[0].length;
    const last_col = col - 1;
    let res = 0;
    while (cur < matrix.length) {
        if (matrix[cur][last_col] < k) {
            res += col;
        } else {
            let i = col - 1;
            while (i < col && matrix[cur][i] > k) {
                i--;
            }
            res += i + 1;
        }
        cur++;
    }
    return res;
};

```
#### 复杂度
时间复杂度：O(nlog(max-min))
空间复杂度：O(1)