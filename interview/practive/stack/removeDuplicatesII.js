/**
 * 1209. 删除字符串中的所有相邻重复项 II https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string-ii/
 * @param s
 * @param k
 */
const removeDuplicatesII = (s, k) => {
    let stack = [];
    for (let item of s) {
        const prev = stack.pop();
        if (!prev || prev[0] !== item) {
            stack.push(prev);
            stack.push(item);
        } else if (prev.length < k - 1) {
            stack.push(prev + item);
        }
    }
    return stack.join('');
}

const s = "deeedbbcccbdaa", k = 3;
console.log('栈实现删除字符串中的所有相邻重复项 II', removeDuplicatesII(s, k));