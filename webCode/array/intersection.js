/**
 * 阿里算法题：编写一个函数计算多个数组的交集
 * 要求：输出结果中的每个元素一定是唯一的
 */
// 使用 reduce 函数
function intersection(...args) {
    if (args.length === 0) return [];
    if (args.length === 1) return args[0];
    return [...new Set(args.reduce((res, arg) => {
        return res.filter(item => arg.includes(item))
    }))];
}

function intersection1(...args) {
    if (args.length === 0) return [];
    if (args.length === 1) return args[0];
    let res = args[0];
    for (let i = 1; i < args.length; i++) {
        res = res.filter(item => args[i].includes(item));
    }
    return [...new Set(res)];
}

const arr1 = [1,2,5,3,6];
const arr2 = [4,6,5,7,8];
const arr3 = [1,3,5,8,5];
console.log(intersection(arr1, arr2, arr3));
console.log(intersection1(arr1, arr2, arr3));


