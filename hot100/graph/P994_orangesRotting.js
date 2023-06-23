/**
 * 994. 腐烂的橘子 https://leetcode.cn/problems/rotting-oranges/description/
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 *
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 *
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 * @param {number[][]} grid
 * @return {number}
 */
// 题解：https://leetcode.cn/problems/rotting-oranges/solutions/129831/li-qing-si-lu-wei-shi-yao-yong-bfsyi-ji-ru-he-xie-/
var orangesRotting = function(grid) {
    // 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数 可转化为 求腐烂橘子到所有新鲜橘子的最短路径
    // 值 0 代表空单元格；值 1 代表新鲜橘子；值 2 代表腐烂的橘子
    const rowLength = grid.length;
    const colLength = grid[0].length;

    // 用队列实现BFS搜索
    const quque = [];
    // 表示新鲜橘子的数量
    let count = 0;

    // 找出所有腐烂的橘子，将其放入队列中，做为BFS的第0层结点，同时记录所有的新鲜橘子数量
    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (grid[row][col] === 1) {
                count++;
            } else if (grid[row][col] === 2) {
                quque.push([row, col]);
            }
        }
    }

    // 表示腐烂的轮数或者分钟数
    let round = 0;
    while (count > 0 && quque.length > 0) {
        round++;
        const size = quque.length;
        for (let i = 0; i < size; i++) {
            const curOrange = quque.shift();
            const row = curOrange[0];
            const col = curOrange[1];

            // 上一行
            if (row - 1 >= 0 && grid[row - 1][col] === 1) {
                grid[row - 1][col] = 2;
                count--;
                quque.push([row - 1, col]);
            }
            // 下一行
            if (row + 1 < rowLength && grid[row + 1][col] === 1) {
                grid[row + 1][col] = 2;
                count--;
                quque.push([row + 1, col]);
            }
            // 左一列
            if (col - 1 >= 0 && grid[row][col - 1] === 1) {
                grid[row][col - 1] = 2;
                count--;
                quque.push([row, col - 1]);
            }
            // 右一列
            if (col + 1 < colLength && grid[row][col + 1] === 1) {
                grid[row][col + 1] = 2;
                count--;
                quque.push([row, col + 1]);
            }
        }
    }

    // 如果还存在新鲜的橘子，则直接返回-1
    if (count > 0) {
        return -1;
    } else {
        return round;
    }
};

/**
 * 输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
 * 输出：4
 *
 * grid = [[2,0,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]
 */

const grid = [[2,0,1,1,1,1,1,1,1,1],[1,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1],[1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];
console.log(orangesRotting(grid));