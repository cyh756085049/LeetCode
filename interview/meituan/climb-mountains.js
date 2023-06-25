/**
 *
 * @param nums [[1,2,3],[2,3,5]]
 */
const climbMountains = (nums) => {
    // 根据数组中的第一个元素排序，数组中第一个元素表示左区间，第二个元素表示右区间，第三个元素表示高度
    nums.sort((a, b) => a[0] - b[0]);
    console.log('nums', nums);
    let sum = 0;
    // 遍历数组
    for (let i = 1; i < nums.length; i++) {
        // 当前元素的左区间大于上一个元素的右区间
        const current = nums[i];
        const pre = nums[i - 1];
        if (current[0] >= pre[1]) {
            sum += pre[2] * 2;
        } else {
            sum += Math.max(current[2], pre[2]);
        }
    }

    if (nums.length >= 2) {
        if (nums[nums.length - 1][0] >= nums[nums.length - 2][1]) {
            sum += nums[nums.length - 2][2] * 2;
        } else {
            sum += Math.max(nums[nums.length - 1][2], nums[nums.length - 2][2]);
        }
    }
    sum += (nums[nums.length - 1][1] - nums[0][0]);
    return sum;
}

const nums = [[1,3,3],[2,4,5],[6,8,5]];
const nums1 = [[1,2,2],[3,4,3]];
console.log(climbMountains(nums));
console.log(climbMountains(nums1));