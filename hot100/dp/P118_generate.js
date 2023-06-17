/**
 * 118. 杨辉三角
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 结果数组
    const data = [];
    // 第一行元素初始化
    const firstArr = [];
    firstArr.push(1);
    // 先将第一行添加到结果数组中
    data.push(firstArr);
    // 获取除第一行的其他结果数组，从第二行开始遍历
    for (let row = 1; row < numRows; row++) {
        // 定义一个当前行数组
        const curRow = [];
        // 当前行数组开头加1
        curRow.push(1);
        // 获取前一行的数组元素
        const preRow = data[row - 1];
        // 遍历求前一数组的每个相邻两数之和
        for (let i = 1; i < preRow.length; i++) {
            curRow.push(preRow[i - 1] + preRow[i]);
        }
        // 当前行数组的末尾加1
        curRow.push(1);
        data.push(curRow);
    }
    return data;
};

/**
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

const numRows = 5;
console.log(generate(numRows));