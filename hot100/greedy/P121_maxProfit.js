/**
 * 121. 买卖股票的最佳时机
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * @param {number[]} prices
 * @return {number}
 */

// 方式1：动态规划
var maxProfit = function(prices) {
    // 状态定义：dp[i][j] 表示在只能交易一次的情况下，第i天结束后，持有j支股票的收益
    let dp = new Array(prices.length).fill(0).map(item => new Array(2).fill(0));
    //0支股票，第0天结束后，持有0支股票的收益
    dp[0][0] = 0;
    // 1支股票，第0天结束后，持有1支股票的收益
    dp[0][1] = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        // 第i天持有0支股票的收益：第 i - 1 天持有0支股票的收益和第 i - 1天持有1支股票的收益 + 当天的股票价格（卖出）
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        // 第i天持有1支股票的收益：第 i - 1 天持有1支股票的收益和第 i - 1天持有0支股票的收益 - 当天的股票价格（买入）
        // dp[i - 1][0] = 0; 隐藏条件，第 i - 1天持有0支股票的收益始终为0
        dp[i][1] = Math.max(dp[i - 1][1], - prices[i]);
    }
    return dp[prices.length - 1][0];
};

// 方式2：贪心算法
const maxProfjtII = (prices) => {
    let maxProfit = 0;
    let cost = Number.MAX_VALUE;
    for (let price of prices) {
        // 股票只买卖一次，取最左最小值，取最右最大值，得到的差值就是最大利润
        cost = Math.min(price, cost);
        maxProfit = Math.max(maxProfit, price - cost);
    }
    return maxProfit;
}

/**
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 *      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 */

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
console.log(maxProfjtII(prices));