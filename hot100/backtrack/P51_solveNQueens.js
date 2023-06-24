/**
 * 51. N 皇后 https://leetcode.cn/problems/n-queens/?envType=study-plan-v2&envId=top-100-liked
 * @param {number} n
 * @return {string[][]}
 */
// 题解：https://leetcode.cn/problems/n-queens/solutions/399133/shou-hua-tu-jie-cong-jing-dian-de-nhuang-hou-wen-t/
const res = [];
var solveNQueens = function(n) {
    // 棋盘初始化
    const board = new Array(n).fill().map(_ => new Array(n).fill('.'));
    helper(board, 0);

    return res;
};

// 放置当前行的皇后
const helper = (board, row) => {
    // 递归出口
    if (row === board.length) {
        const copyBoard = board.slice();
        for (let i = 0; i < board.length; i++) {
            // 将每一行拼成字符串
            copyBoard[i] = copyBoard[i].join('');
        }
        // 加入到结果集
        res.push(copyBoard);
        return;
    }

    // 枚举出所有的选择
    for (let col = 0; col < board.length; col++) {
        // 剪枝无效选择
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            // 递归
            helper(board, row + 1);
            // 撤销当前选择
            board[row][col] = '.';
        }
    }
}

const isValid = (board, row, col) => {
    // 之前的行
    for (let i = 0; i < row; i++) {
        // 所有的列
        for (let j = 0; j < board.length; j++) {
            // 发现了皇后，并且和自己同列、对角线，则不是合法的选择
            if (board[i][j] === 'Q' && (j === col || i + j === row + col || i - j === row - col)) {
                return false;
            }
        }
    }
    return true;
}

/**
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 */
const n = 1;
console.log(solveNQueens(n));