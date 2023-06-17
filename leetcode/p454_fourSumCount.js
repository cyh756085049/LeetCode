/**
 思路：使用哈希表，首先遍历nums1和nums2,
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    for (let i of nums1) {
        for (let j of nums2) {
            const sum12 = i + j;
            if (map.get(sum12) !== undefined) {
                map.set(sum12, map.get(sum12) + 1);
            } else {
                map.set(sum12, 1);
            }
        }
    }

    let count = 0;
    for (let m of nums3) {
        for (let n of nums4) {
            const sum34 = m + n;
            if (map.get(0 - sum34) !== undefined) {
                count += map.get(0 - sum34);
            }
        }
    }

    return count;
};

const nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2];
console.log(fourSumCount(nums1, nums2, nums3, nums4));