/**
 * 821. 字符的最短距离
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
    let arr = S.split("");
    let newStr = [];
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === C) {
            newStr.push(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let min = Math.abs(i - newStr[0]);
        if (arr[i] === C) {
            resArr.push(0);
        } else {
            newStr.forEach(item => {
                let tmp = Math.abs(i - item);
                min = Math.min(min, tmp);
            })
            resArr.push(min);
        }
    }
    return resArr;
}

console.log(shortestToChar("loveleetcode", 'e'));
