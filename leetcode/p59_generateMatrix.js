/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
    // 定义上下左右指针
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    // 设置初始值 1 和结束值 n * n
    let num = 1, res = n * n;
    // 定义二维数组
    let matrix = new Array(n).fill(0);
    matrix.map((item, index) => {
        matrix[index] = new Array(n).fill(0);
    })
    console.log(matrix);

    // 循环遍历
    while (num <= res) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        // 从上到下
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        // 从右到左
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
        // 从下到上
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
};

console.log(generateMatrix(3));