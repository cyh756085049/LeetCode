/**
 * 239. 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let tmp = [], res = [];
    for (let i = 0,j = i + k; i < nums.length - k, j < nums.length; i++, j++) {
        tmp = nums.slice(i, j);
        let tmp_max = Math.max.apply(Math, tmp);
        tmp = [];
        res.push(tmp_max);
    }
    for (let i = nums.length - k; i < nums.length; i++) {
        tmp.push(nums[i]);
    }
    let last_max = Math.max.apply(Math, tmp);
    res.push(last_max);
    return res;
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1,-1], 1));
console.log(maxSlidingWindow([5, 3, 4], 1));