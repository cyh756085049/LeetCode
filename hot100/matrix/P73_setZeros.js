/**
 * 73. 矩阵置零
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * 空间复杂度 O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    // 首行标志
    let row0Flag = false;
    // 首列标志
    let col0Flag = false;

    // 先遍历首行和首列，更新首行和首列为0时的标志位
    for (let i = 0; i < rowLength; i++) {
        if (matrix[i][0] === 0) {
            col0Flag = true;
            break;
        }
    }

    for (let j = 0; j < colLength; j++) {
        if (matrix[0][j] === 0) {
            row0Flag = true;
            break;
        }
    }

    // 遍历非首行和首列
    for (let i = 1; i < rowLength; i++) {
        for (let j = 1; j < colLength; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 非首行和首列置0
    for (let i = 1; i < rowLength; i++) {
        for (let j = 1; j < colLength; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 首行存在0，则首行置0
    if (row0Flag) {
        for (let i = 0; i < colLength; i++) {
            matrix[0][i] = 0;
        }
    }

    // 首列存在0，则首列置0
    if (col0Flag) {
        for (let i = 0; i < rowLength; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};

/**
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */

const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));
