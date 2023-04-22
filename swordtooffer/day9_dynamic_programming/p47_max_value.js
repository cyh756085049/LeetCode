/**
 * 剑指 Offer 47. 礼物的最大价值
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 *
 * 输入:
 * [
 *   [1,3,1],
 *   [1,5,1],
 *   [4,2,1]
 * ]
 * 输出: 12
 * 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 *
 * 【动态规划】
 * 思路：1、状态转移方程：把题目转化为从右下角向左和向上移动：grid[i][j] +=  Math.max(grid[i][j-1], grid[i-1][j]);
 *      2、注意边界条件：i，j 不能越界，当走到第一行时，只能向左走，当走到第一列时，只能向上走。所以要把第一行和
 *      第一列进行边界情况处理。
 */

const maxValue = function (grid) {
    if (!grid || !grid.length) {
        return 0;
    }

    for (let i = 1; i < grid.length; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    for (let j = 1; j < grid[0].length; j++) {
        grid[0][j] += grid[0][j - 1];
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
        }
    }

    console.log('修改后的二维数组：', grid);
    return grid[grid.length - 1][grid[0].length - 1];
}

console.log(maxValue([[1,3,1],[1,5,1],[4,2,1]]));
