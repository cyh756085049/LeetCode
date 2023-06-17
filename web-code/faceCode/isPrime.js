/**
 * 得物APP
 * 判断一个数是否是质数。质数是能被1和自身整除的数。
 * @param n
 */
// 方法1：暴力法
function isPrime(n) {
    if (n < 2) return true;
    for (let i = 2; i < n; i++) {
        // 有其他整除因子
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// 方法2：开根号，只需要查询[2,sqrt(n)]
function isPrime1(n) {
    if (n < 2) return true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * 204.计数质数   时间复杂度O(n^2)
  */
// 暴力法
function countPrimes(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}
// 埃拉托斯特尼筛法
function countPrimes1(n) {
    let count = 0;
    let arr = new Array(n);
    for (let i = 2; i < n; i++) {
        if (!arr[i - 1]) {
            count++;
            for (let j = i * i; j <= n; j += i) {
                arr[j - 1] = true;
            }
        }
    }
    return count;
}


const a = 17;
console.log(isPrime(a));
console.log(countPrimes1(a));