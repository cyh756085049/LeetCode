/**
 * 55. 跳跃游戏
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 前 n - 1 个元素能够跳到的最远距离
    let maxPosition = 0;
    for (let currentPosition = 0; currentPosition < nums.length; currentPosition++) {
        // 如果当前位置是可达的，则计算下一跳的最远距离
        if (currentPosition <= maxPosition) {
            // 当前位置能跳的距离
            let jumpDistance = nums[currentPosition];
            // 更新最远距离
            maxPosition = Math.max(maxPosition, currentPosition + jumpDistance);
            // 最远距离已经大于等于最后一个元素的下标，则说明能跳出去，直接返回true
            if (maxPosition >= nums.length - 1) {
                return true;
            }
        }
    }
    return false;
};

/**
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 */

const nums = [3,2,1,0,4];
console.log(canJump(nums));