function validBraces( str ) {
    // write code here
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const stack = [];
    const arr = str.split('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            stack.push(arr[i]);
        } else {
            if (stack.length === 0) {
                return -1;
            }
            const top = stack[stack.length - 1];
            if (map[top] === arr[i]) {
                stack.pop();
                // return i;
            } else {
                return -1;
            }
            // return i;
        }
    }
    return stack.length - i;
}

console.log(validBraces("[]{{"));