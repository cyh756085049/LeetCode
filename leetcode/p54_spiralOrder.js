/**
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

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));