/**
 * 48. 旋转图像
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    // 使用水平翻转和主对角线翻转实现
    const len = matrix.length;
    // 水平翻转 只需要遍历行上半部分，和下半部分交换
    for (let i = 0; i < Math.floor(len / 2); i++) {
        for (let j = 0; j < len; j++) {
            [matrix[i][j], matrix[len - i - 1][j]] = [matrix[len - i - 1][j], matrix[i][j]];
        }
    }

    // 对角线翻转 只需要遍历对角线左侧元素，和对角线右侧元素交换
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    return matrix;
};

// 方法1：使用辅助矩阵，时间复杂度O(n^2) 空间复杂度 O(n^2)
var rotate2 = function(matrix) {
    // 使用辅助矩阵
    const len = matrix.length;
    const newMatrix = new Array(len).fill(0).map(() => new Array(len).fill(0));
    // 矩阵中的第i行第j个元素，通过旋转，会出现在倒数第j列的第i个元素
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            newMatrix[j][len - 1 - i] = matrix[i][j];
        }
    }

    // 将辅助数组元素复制到原数组中，保证只修改原数组
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            matrix[i][j] = newMatrix[i][j];
        }
    }

    return matrix;
};

/**
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 *
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(rotate(matrix));