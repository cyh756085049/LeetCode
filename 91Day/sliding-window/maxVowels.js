/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ["a", "e", "i", "o", "u"];
    vowels = new Set(vowels);
    let count = 0, left = 0, right = 0;
    while (right < k) {
        vowels.has(s[right]) && count++;
        right++;
    }
    let max = count;
    while (right < s.length) {
        vowels.has(s[right]) && count++;
        vowels.has(s[left]) && count--;
        left++;
        right++;
        max = Math.max(max, count);
    }
    return max;
};

var maxVowels1 = function(s, k) {
    const vowels = {a: true, e: true, i: true, o: true, u: true
    }
    let i = 0, count = 0, max = 0;
    while (i < s.length) {
        if (i < k) {
            if (vowels[s[i]]) count++;
        } else {
            if (vowels[s[i]]) count++;
            if (vowels[s[i - k]]) count--;
        }
        i++;
        max = Math.max(max, count);
    }
    return max;
};

console.log(maxVowels1("rhythms", 3));