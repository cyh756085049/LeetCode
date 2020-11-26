/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

/**
 * 原生方法：扁平化数组
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function(matrix, target) {
    return matrix.flat().includes(target);
}

/** 双指针,矩阵可以看成m * n长度，[0, m * n - 1]递增数组
 数组[数组索引] = 矩阵[数组索引 / n取整][数组索引 % n]
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix2 = function(matrix, target) {
    if (matrix[0] === void 0) return false;
    let m = matrix.length, n = matrix[0].length, left = 0, right = m * n - 1;
    while (left <= right) {
        let mid = left + (right - left >>> 1);
        let row = parseInt(mid/n), col = mid % n;
        let val = matrix[row][col];
        if (val === target) return true;
        else if (val > target) right = mid - 1;
        else left = mid + 1
    }
    return false;
};





console.log(searchMatrix2([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3));