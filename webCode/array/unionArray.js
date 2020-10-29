/**
 * leetcode349：给定两个数组，编写一个函数来计算它们的交集
 * @param num1
 * @param num2
 * @returns {[]}
 */
function unionArray(num1, num2) {
    let res = [];
    num1.forEach(n1 => {
        num2.forEach(n2 => {
            if (n1 === n2) {
                res.push(n1);
            }
        })
    })
    return [...new Set(res)];
}

// map存数据， Set去重
function unionArray1(num1, num2) {
    const map = {}, ans = [];
    num1.forEach(item => {
        map[item] = true;
    });
    num2.forEach(item => {
        if (map[item]) {
            ans.push(item);
        }
    });
    return [...new Set(ans)];
}

// filter 过滤, Set 去重
function unionArray2(num1, num2) {
    return [...new Set(num1.filter(item => num2.includes(item)))];
}

const num1 = [4,9,5];
const num2 = [9,4,9,8,4];
console.log(unionArray(num1, num2));
console.log(unionArray1(num1, num2));
console.log(unionArray2(num1, num2));