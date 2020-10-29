/**
 * 数组去重方法
 * @param arr
 * @returns {any[]}
 */
// 1 ES6 Set 去重
// 缺点：无法去掉空对象 {}
function uniqueArray1 (arr) {
    // return Array.from(new Set(arr));
    return [...new Set(arr)];
}

// 2 双层嵌套for循环 splice 去重
// 缺点：NaN 和 {} 没有去重
function uniqueArray2 (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

// 3 indexOf 去重, 新建一个结果数组，for循环原数组，判断结果数组中是否存在当前元素，如果有相同的就跳过，不相同就push进数组
// 缺点：NaN 和 {} 没有去重
function uniqueArray3 (arr) {
    if (!Array.isArray(arr)) {
        console.log('type error');
        return ;
    }
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i] === -1)) {
            array.push(arr[i]);
        }
    }
    return array;
}

// 4 Map 去重, 创建一个Map数据结构，和一个新的数组，遍历原数组，把数组的值作为key，布尔值作为value对数组进行去重
// 缺点：{} 没有去重
function uniqueArray4(arr) {
    let map = new Map();
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false);
            array.push(arr[i]);
        }
    }
    return array;
}

// 5 reduce + includes 去重
// 缺点：{} 没有去重
function uniqueArray5(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

// 6 filter 去重
// 缺点：{} 没有去重, NaN 消失
function uniqueArray6(arr) {
    return arr.filter(function (item, index, arr) {
        return arr.indexOf(item, 0) === index;
    });
}

const arr = [1,1,'true','true',true,true,14,13,false,false,undefined,undefined,null,null,NaN,NaN,'NaN','NaN','a','a',{},{}];
console.log(uniqueArray1(arr));
console.log(uniqueArray2(arr));
console.log(uniqueArray3(arr));
console.log(uniqueArray4(arr));
console.log(uniqueArray5(arr));
console.log(uniqueArray6(arr));
// console.log(uniqueArray1(arr));

// https://lgwebdream.github.io/FE-Interview/program/#%E5%9C%A8%E4%B8%80%E4%B8%AA-ul-%E9%87%8C%E6%9C%89-10-%E4%B8%AA-li-%E5%AE%9E%E7%8E%B0%E7%82%B9%E5%87%BB%E5%AF%B9%E5%BA%94%E7%9A%84-li-%E8%BE%93%E5%87%BA%E5%AF%B9%E5%BA%94%E7%9A%84%E4%B8%8B%E6%A0%87

