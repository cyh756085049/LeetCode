/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const len = s.length;
    let arr = s.split('');

    for (let left = 0; left < len; left += 2*k) {
        let right = left + k - 1;
        reverse(arr, left, Math.min(right, len - 1));
    }

    return arr.join('');
};

const reverse = function(s, left, right) {
    while (left < right) {
        let c = s[left];
        s[left] = s[right];
        s[right] = c;
        left++;
        right--;
    }
}

console.log(reverseStr('abcdefg', 2));