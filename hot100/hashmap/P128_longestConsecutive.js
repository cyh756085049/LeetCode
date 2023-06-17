/**
 * 128. 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    // 用来保存数组中的数字，保证以O(1)的复杂度去取值
    const set = new Set();
    for (let num of nums) {
        set.add(num);
    }

    // 保存最长连续子序列长度
    let longestLength = 0;
    for (let num of set) {
        // 如果当前遍历的数字 num - 1 存在于set中，则直接跳过，否则，表示存在以num为开始的子序列，设置长度为1，再把当前的值+1，判断
        // 是否存在于set中，如果存在，则继续加1
        if (!set.has(num - 1)) {
            let curNum = num;
            let curLongestLength = 1;
            while (set.has(curNum + 1)) {
                curNum++;
                curLongestLength++;
            }
            longestLength = Math.max(longestLength, curLongestLength);
        }
    }

    return longestLength;
};

/**
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * @type {number[]}
 */
const arr1 = [0,3,7,2,5,8,4,6,0,1];
const arr2 = [];
const arr3 = [9,1,4,7,3,-1,0,5,8,-1,6];
const arr4 = [100,4,200,1,3,2];
console.log(longestConsecutive(arr4));