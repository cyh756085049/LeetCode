/**
 * 54. 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0, right = n - 1, top = 0, bottom = m - 1;
    let res = [];

    while (left <= right && top <= bottom) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        // 从上到下
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (top > bottom || left > right) break;
        // 从右到左
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        // 从下到上
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }

    return res;
};

/**
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 */

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));