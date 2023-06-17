/**
 * 240. 搜索二维矩阵 II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 方法1：二分搜索 时间复杂度 O(mlogn) 空间复杂度 O(1)
var searchMatrix1 = function(matrix, target) {
    // 二分搜索
    for (const row of matrix) {
        // 按每行进行二分搜索
        const index = binearySearch(row, target);

        // 有等于目标值的索引存在，则表明矩阵中包含该目标元素
        if (index >= 0) {
            return true;
        }
    }

    return false;
};

const binearySearch = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

// 方法2：z字形查找
var searchMatrix2 = function(matrix, target) {
    // 由于矩阵从左到右和从上到下升序，从右上角到左下角查找
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    let left = 0, right = colLength - 1;

    while (left < rowLength && right >= 0) {
        if (matrix[left][right] === target) {
            return true;
        }

        if (matrix[left][right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

/**
 * 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * 输出：true
 */

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
console.log(searchMatrix2(matrix, target));