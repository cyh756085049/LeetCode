/**
 * 删除数组中出现次数最多的元素，包括出现相同次数的元素
 * @param arr
 * @returns {[]|*}
 */
function popNumArray(arr) {
    let map = new Map();
    let res = [];
    let len = arr.length;
    if (len === 1 || len === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        if (map.has(arr[i])) {
            count++;
        }
        map.set(arr[i], count);
    }
    let max = 0;
    Array.from(map.values()).forEach(item => {
        max = Math.max(item, max);
    })
    // let val = Array.from(map.values());
    // for (let i = 0; i < val.length; i++) {
    //     for ()
    // }
    // console.log(max);
    let result = Array.from(map)
    console.log(result);
        // console.log(Array.from(map));
    let test = result;
    for (let i = 0; i < result.length; i++) {
        // console.log(result[i][1]);
        if (result[i][1] === max) {
            result.splice(i, 1);
        }
    }
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        res.push(result[i][0]);
    }
   // console.log(res);
    return res;
}

arr = [1,3,5,7,9,5, 7, 9];
console.log(popNumArray(arr));