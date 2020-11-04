/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let res = '';
    for (const char of s) {
        if (!isNaN(char)) {
            num = num * 10 + Number(char);
        } else if (char === '[') {
            strStack.push(res);
            res = '';
            numStack.push(num);
            num = 0;
        } else if (char === ']') {
            let repeat = numStack.pop();
            res = strStack.pop() + res.repeat(repeat);
        } else {
            res += char;
        }
    }
    return res;
};