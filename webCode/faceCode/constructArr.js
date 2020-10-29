/**
 * @param {number[]} a
 * @return {number[]}
 */
function constructArr (a) {
    const n = a.length;
    let B = [];
    for (let i = 0; i < n; i++) {
        B[i] = fn(a, i);
    }
    return B;
};

function fn(arr, n) {
    if (n === 0) {
        return arr[0];
    }else if (n > 0) {
        return arr[n] * fn(arr, n - 1);
    }
}

const a = [1, 2, 3, 4, 5];
console.log(constructArr(a));