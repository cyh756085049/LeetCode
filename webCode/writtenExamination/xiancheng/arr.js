/**
 * 输入一个数组，排除掉非数字类型和负数的元素后，对数组中剩余的元素进行排列组合，求出组合后的最大数值。
 * 输入一个数组
 * 输出这个数组排列的最大值
 */
function maxValue(arr) {
    if (arr === null) return 0;
    let res = [];
    arr.forEach(item => {
        // 非负数和非数字类型
        if (/^\d+$/.test(item)) {
            res.push(item);
        } else if (/\d/.test(item)) {
            res.push(item);
        }
    })
    console.log(res);
    let str = res.sort((a,b)=> ('' + b + a) - ('' + a + b))[0] ? arr.join('') : '0';
    return parseInt(str);
}

const arr = [1,0,2,3, -1];
console.log(maxValue(arr));

