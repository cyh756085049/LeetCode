/**
 * 45. 跳跃游戏 II
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
 * 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
 * 0 <= j <= nums[i]
 * i + j < n
 * 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 记录最小跳跃次数
    let step = 0;
    // 记录能跳到的最远距离
    let maxPosition = 0;
    // 记录最后跳到最远距离
    let lastJumpMaxPosition = maxPosition;
    // 为什么是小于 nums.length - 1？
    for (let currentPosition = 0; currentPosition < nums.length - 1; currentPosition++) {
        const jumpDistance = nums[currentPosition];
        maxPosition = Math.max(maxPosition, currentPosition + jumpDistance);
        // 只有当前跳跃位置达到了之前跳跃过程中的最原距离时，才准备开始下一跳，尽量减少跳跃次数
        if (currentPosition === lastJumpMaxPosition) {
            lastJumpMaxPosition = maxPosition;
            step++;
        }
    }

    return step;
};

/**
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 *      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 */
const nums = [2,3,1,1,4];
console.log(jump(nums));