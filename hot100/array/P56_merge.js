/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 定义结果数组
    let res = [];

    // 按照数组区间的第一个值进行升序排序
    intervals.sort((a, b) => a[0] - b[0]);

    // prev 初始为第一个区间，cur 表示当前的区间
    // 遍历目标数组，比较初始区间的左元素和当前区间的右元素，如果重合，则更新当前区间的右边界为两个值中的最大值，
    // 遇到不重合的添加到结果集中，并更新区间
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        if (prev[1] >= cur[0]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            res.push(prev);
            prev = cur;
        }
    }

    res.push(prev);
    // 返回结果数组
    return res;
};

/**
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 */

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));