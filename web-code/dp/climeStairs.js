/**
 * 爬楼梯
 * 每次可以爬 1 或 2 个台阶，有多少种不同的方法可以爬到楼顶
 * 1、斐波那契数列
 * @param n
 * @returns {number|*}
 */
function climeStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climeStairs(n - 1) + climeStairs(n - 2);
}

// 2、动态规划
function climeStairs1(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// 优化
function climeStairs2(n) {
    let pre = 1;
    let cur = 2;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = pre + cur;
        pre = cur;
        cur = sum;
    }
    return sum;
}


const n = 3;
console.log(climeStairs(n));
console.log(climeStairs1(n));
console.log(climeStairs2(n));
