/** 合并两个有序数组（更改现有数组，不返回新数组）
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使 num1 成为一个有序数组
 * 时间复杂度 O(m + n)
 * @param num1
 * @param num2
 */
function mergeArray1(num1, num2) {
    let m = num1.length,
        n = num2.length,
        len1 = m - 1,
        len2 = n - 1,
        // 总数组长度
        len = m + n - 1;
    // 如果num2长度大于等于0
    while (len2 >= 0) {
        // 判断num1的长度，如果小于0，则把num2中的元素添加到num1中
        if (len1 < 0) {
            num1[len--] = num2[len2--];
            continue;
        } else {
            // 否则，分别从两个有序数组的最后一个元素进行比较，将最大值加入num1[len]中，并将元素的长度减1
            num1[len--] = num1[len1] >= num2[len2] ? num1[len1--] : num2[len2--];
        }
    }
    return num1;
}

// 使用api实现
function mergeArray(num1, num2) {
    num1.push(...num2);
    return num1.sort((a, b) => a - b);
}

let num1 = [1, 3, 4, 6, 8];
let num2 = [2, 5, 6, 7, 10];
// console.log(mergeArray(num1, num2));
console.log(mergeArray1(num1, num2));