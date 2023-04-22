/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let resArr = nums1.concat(nums2);
    resArr.sort((a, b) => a - b);
    if (!resArr.length) return 0;
    if (resArr.length % 2 !== 0) {
        return resArr[Math.floor(resArr.length / 2)];
    } else {
        const i = resArr.length / 2;
        return (resArr[i] + resArr[i - 1]) / 2;
    }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));