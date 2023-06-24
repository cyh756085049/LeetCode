/**
 * 84. 柱状图中最大的矩形 https://leetcode.cn/problems/largest-rectangle-in-histogram/description/
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * @param {number[]} heights
 * @return {number}
 */
// 单调递增栈实现
// 题解：https://leetcode.cn/problems/largest-rectangle-in-histogram/solutions/267385/wo-yong-qiao-miao-de-bi-yu-jiang-dan-diao-zhan-jie/
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    // 维护一个 stack 栈，用来记录 bar 的位置索引
    const stack = [];
    // 设立一个高为 0 的虚拟 bar ，放在 heights 的 0 位置，它不影响结果，却可以让第一条 bar 的索引，名正言顺地入栈，
    // 同时，当栈只有一个元素时，可以让栈顶出栈，并且栈不空，因为高为0的虚拟 bar 会永不出栈。
    // 最后一个 bar 不会遇到新 bar 了，如果它在栈中，那就没有机会出栈了，意味着，没有机会计算栈中的长方形面积了
    // 我们设立一个虚拟的高为 0 的 bar，放在 heights 数组的最右，栈中的 bar 都比它高，能一一出栈，得到解救
    heights = [0, ...heights, 0];
    for (let i = 0; i < heights.length; i++) {
        // 当前bar 和 栈顶 bar 比较，且当前 bar 比 栈顶 bar 矮
        while (heights[i] < heights[stack[stack.length - 1]]) {
            // 栈顶元素出栈，并保存栈顶 bar 的索引
            const stackTopIndex = stack.pop();
            // 计算当前的最大面积
            const curBarArea = heights[stackTopIndex] * (i - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, curBarArea);
        }
        stack.push(i);
    }

    return maxArea;
};

/**
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 */

const heights = [2,1,5,6,2,3];
console.log(largestRectangleArea(heights));