/**
 * 数组扁平化、去重、排序
 * @param arr
 * @returns {this}
 */
function flatArray(arr) {
    // 数组扁平化
    let flatArr = flatten3(arr);
    // let flatArr = flatten2(arr);
    // let flatArr = flatten1(arr);
    // let flatArr = flatten(arr);
    // 数组去重
    let disArr = [...new Set(flatArr)];
    // 数组排序
    let result = disArr.sort((a, b) => a - b);
    return result;
}

// reduce 实现扁平化（通过递归）
function flatten(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flat(item) : item);
    }, []);
}

// 递归实现
function flatten1(arr) {
    let res = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            res = res.concat(flatten1(item));
        } else {
            res.push(item);
        }
    });
    return res;
}

// 转化成字符串
function flatten2(arr) {
    // let str = arr.toString(); // 1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10
    // let str = arr.join(',');
    let str = String(arr);
    return str.split(',').map(item => {
        return Number(item);
    })
}

// ES6扩展运算符
function flatten3(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}



let arr = [[1,2,2], [3,4,5,5], [6, 7, 8, 9, [11,12, [12,13,[14]]]], 10];
console.log(flatArray(arr));