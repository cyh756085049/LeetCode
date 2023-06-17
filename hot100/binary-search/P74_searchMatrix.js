/**
 * 74. 搜索二维矩阵
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * @param matrix
 * @param target
 * @returns {number|boolean}
 */
var searchMatrix = function(matrix, target) {
    // 时间复杂度为 O(logm + logn)=O(logmn)
    // 现在行中二分
    const rowIndex = binarySearch(matrix, target, 'col');
    if (rowIndex < 0) {
        return false;
    }

    // 再在列中二分
    return binarySearch(matrix[rowIndex], target, 'row');
};

// 二分搜索法
const binarySearch = (matrix, target, str) => {
    const length = matrix.length;

    let left = 0;
    let right = length - 1;
    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;
        let curNum = str === 'col' ? matrix[middle][0] : matrix[middle];
        if (curNum > target) {
            right = middle - 1;
        } else if (curNum < target) {
            left = middle + 1;
        } else {
            if (str === 'col') {
                return middle;
            } else {
                return true;
            }
        }
    }
    if (str === 'col') {
        return right;
    } else {
        return false;
    }
}

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
console.log(searchMatrix(matrix, target));