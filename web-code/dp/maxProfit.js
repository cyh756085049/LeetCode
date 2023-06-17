/**
 * leetCode121：买卖股票的最佳时机
 * 1、暴力法，两层循环，求数组后边数与前边值的最大值
 * @param nums
 * @returns {number}
 */
function maxProfit(nums) {
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            max = Math.max(nums[j] - nums[i], max);
        }
    }
    return max;
}

// 动态规划
function maxProfit1(prices) {
    let max = 0, minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        max = Math.max(max, prices[i] - minPrice);
    }
    return max;
}

const nums = [7,1,5,3,6,4];
console.log(maxProfit(nums));
console.log(maxProfit1(nums));