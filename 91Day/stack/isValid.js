/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        // 如果是左括号，入栈
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            // 如果是右括号，且栈为空，则无法匹配，返回false
            if (stack.length === 0) return false;
            // 如果栈不为空，获取栈顶
            const top = stack[stack.length - 1];
            // 如果栈顶与此时遍历的括号匹配，则出栈
            if (top === '(' && s[i] === ')' || top === '{' && s[i] === '}' || top === '[' && s[i] === ']') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function(s) {
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        } else {
            if (s[i] !== map[stack.pop()]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid1("([]{})"));