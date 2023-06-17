/**
 * 169. 多数元素
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * 思路：Boyer-Moore投票法
 *
 * “同归于尽消杀法” ：
 * 由于多数超过50%, 比如100个数，那么多数至少51个，剩下少数是49个。
 * 第一个到来的士兵，直接插上自己阵营的旗帜占领这块高地，此时领主 winner 就是这个阵营的人，现存兵力 count = 1。
 * 如果新来的士兵和前一个士兵是同一阵营，则集合起来占领高地，领主不变，winner 依然是当前这个士兵所属阵营，现存兵力 count++；
 * 如果新来到的士兵不是同一阵营，则前方阵营派一个士兵和它同归于尽。 此时前方阵营兵力count --。（即使双方都死光，这块高地的旗帜 winner 依然不变，
 * 因为已经没有活着的士兵可以去换上自己的新旗帜）
 * 当下一个士兵到来，发现前方阵营已经没有兵力，新士兵就成了领主，winner 变成这个士兵所属阵营的旗帜，现存兵力 count ++。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let winner = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (winner === nums[i]) {
            count++;
        } else if (count === 0) {
            winner = nums[i];
            count++;
        } else {
            count--;
        }
    }

    return winner;
};

/**
 * 输入：nums = [3,2,3]
 * 输出：3
 */

const nums = [3,2,3];
console.log(majorityElement(nums));
