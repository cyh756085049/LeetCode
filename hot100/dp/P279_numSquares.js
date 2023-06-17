/**
 * 279. 完全平方数
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
 * 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 * @param {number} n
 * @return {number}
 */

// 完全背包问题：方式1：先遍历容器，1~n的整数数字，再遍历物品，即组成 小于等于 当前容器数字的 完全平方数
var numSquares = function(n) {
    // 状态定义：dp[i]表示组成数字i的和为n的完全平方数的最少数量
    let dp = new Array(n + 1);
    // 状态初始化：dp[0] = 0, 和为0的完全平方数的最少数量为0个，即0
    dp[0] = 0;
    // 状态转移，编写状态递推公式
    // 完全背包问题，先遍历背包容器，即 1~n
    for (let i = 1; i <= n; i++) {
        // 结果求最小数量，给每个容器即数字i都设置默认值为比n大的值
        dp[i] = n + 1;
        // 再遍历物品，也就是小于等于当前容器的完全平方数，即 roo * root <= i
        for (let root = 1; i - root * root >= 0; root++) {
            // 定义状态转移方程，即为比较当前不选新的容器包含的物品的个数 dp[i] 和 选择了当前物品后的数量 + 1
            dp[i] = Math.min(dp[i], dp[i - root * root] + 1);
        }
    }

    // 返回结果
    return dp[n];
};

// 完全背包问题 方式2：先遍历物品，再遍历容器
const numSquareII = (nums) => {
    // 先求小于容器的物品有哪些
    const squares = [];
    for (let i = 1;  i * i <= n; i++) {
        squares.push(i * i);
    }

    let dp = new Array(n + 1).fill(n + 1);
    dp[0] = 0;
    for (let square of squares) {
        for (let j = square; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - square] + 1);
        }
    }

    return dp[n];
}

/**
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 */

const n = 13;
console.log(numSquares(n));
console.log(numSquareII(n));