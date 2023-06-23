/**
 * 287. 寻找重复数 https://leetcode.cn/problems/find-the-duplicate-number/description/
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 * @param {number[]} nums
 * @return {number}
 */

// 方法1：快慢指针
// 题解：https://leetcode.cn/problems/find-the-duplicate-number/solutions/58841/287xun-zhao-zhong-fu-shu-by-kirsche/
const findDuplicate = (nums) => {
    // 思路：将数组下标和数组值进行对应，构建链表
    // 数组中有一个重复的整数 <==> 链表中存在环 2.找到数组中的重复整数 <==> 找到链表的环入口
    let slow = 0;
    let fast = 0;
    slow = nums[slow];
    fast = nums[nums[fast]];

    while (slow !== fast) {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }

    let pre1 = 0;
    let pre2 = slow;
    while (pre1 !== pre2) {
        pre1 = nums[pre1];
        pre2 = nums[pre2];
    }

    return pre1;
}

// 方法2：二分查找
/**
 * 二分搜索：统计每个数字出现的次数
 * 题目保证了一定出现并只出现一个重复数字，假如取数组中点将数组分为前后两段，
 * 如 [1,2,2,3,4], 取中点 nums[2]=2 将数组划分成 [1,2,2] 与 [3,4] 两段，
 * - 在前半段统计 <= nums[2] 的数字的数量，即 1+1+1=3;
 * - 在后半段统计 > nums[2] 的数字的数量，即 1+1=2;
 * 而如果数字互不相同，如 [1,2,5,3,4]，以中点 nums[2] 按照相同方式统计，
 * - 在前半段统计 <= nums[2] 的数字的数量，即 1+1=2;
 * - 在后半段统计 > nums[2] 的数字的数量，即 1+1=2;
 * 也就是说，前后两段中出现数字的数量是相同的，但如果出现了重复数字，
 * 则出现重复数字的那段区间的数字 count 会多 1，就可以排除掉另一段区间的所有元素，实现"二分"效果。
 */
var findDuplicateII = function(nums) {
    // 在 1..n 之间进行二分搜索
    let left = 1;
    let right = nums.length - 1;
    while (left < right) {
        let middle = Math.floor((right - left) / 2) + left;
        let count = 0;
        for (let num of nums) {
            if (num <= middle) {
                count++;
            }
        }
        if (count > middle) {
            //  某个数字至少出现了两次，并且是出现在前半段区间。
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
};

/**
 * 输入：nums = [1,3,4,2,2]
 * 输出：2
 */

const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
console.log(findDuplicateII(nums));