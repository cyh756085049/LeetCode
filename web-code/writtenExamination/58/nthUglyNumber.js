var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

rl.on('line', function(line){ // javascript每行数据的回调接口
    const n = line;
    console.log(nthUglyNumber(n));
});

function nthUglyNumber(n) {
    if (n < 1) return false;
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;
    return n === 1;
}

