/**
 * 题目描述：
 小美喜欢字母E，讨厌字母F。在小美生日时，小团送了小美一个仅包含字母E和F的字符串，
 小美想从中选出一个包含字母E数量与字母F数量之差最大的子串。
 *子串：从字符串前面连续删去若干个字符，从后面连续删去若干个字符剩下的字符串（也可以一个都不删），
 * 例如abcab是fabcab的子串，而不是abcad的子串。我们将空串看作所有字符串的子串。
 * 输入：
 * 5
 * EFEEF
 * 第一行一个正整数 n表示字符串的长度。第二行长度为n，且仅包含大写字母’E’,’F’的字符串（不含引号）
 * 输出：
 * 输出一个整数，表示最大的差值
 * 5
 n<=300000
 * @param str
 */
function maxStr(str) {
    // let arr = str.split("");
    // let index = 0;
    // let max = 0;
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] === arr[index]) {
    //         index++;
    //         max++;
    //     } else {
    //         arr[i] = arr[index];
    //     }
    // }
    // return max;

    let i = 0, j = str.length - 1;
    let res = 0;
    let count = 0;
    while (i <= j) {
        while (i <= j && str[i] !== 'E') i++;
        while (i <= j && str[j] !== 'E') j--;
        for (let k = i; k < j; k++) {
            if (str[k] === 'F') count++;
        }
        res = Math.max(res, j - i - count);
        i++;
        j--;
    }
    return count === 0 ? res + 1 : res;

    // let res = 0;
    // let i = 0, j = 0;
    // while (j < str.length) {
    //     if (str[j] === str[i]) {
    //         res++;
    //     } else {
    //         i = j;
    //     }
    //     j++;
    // }
    // return res;

}

const n = 5;
const str = "EFEEF";
console.log(maxStr(str));