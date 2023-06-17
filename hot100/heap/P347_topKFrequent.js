/**
 * 347. 前 K 个高频元素
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * @param nums
 * @param k
 */
var topKFrequent = function(nums, k) {
    // 哈希表存储数组每一个数字出现的频次
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 将map中的key转化为数组
    const arr = Array.from(map.keys());
    // 根据频次降序排序每个数字
    arr.sort((a, b) => map.get(b) - map.get(a));

    // 最后，返回频率前k高的元素
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i]);
    }

    return res;
}

/**
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 */

const nums = [1,1,1,2,2,3], k = 2;
console.log(topKFrequent(nums, k));