/**
 * 70. 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    let second = 2;
    if (n === 1) return first;
    if (n === 2) return second;
    for (let i = 2; i < n; i++) {
        let thrid = first + second;
        first = second;
        second = thrid;
    }
    return second;
};