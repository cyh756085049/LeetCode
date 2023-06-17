/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return [];

    const len = nums.length;
    let res = [];
    for (let i = 0; i < len - 2; i++) {
        while (i > 0 && i < len - 2 && nums[i] === nums[i - 1]) {
            i++;
            continue;
        }
        // 左指针
        let left = i + 1;
        // 右指针
        let right = len - 1;

        while (left < right) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right++;
                }
            }
        }
    }

    return res;
};

console.log(threeSum([-2,0,0,2,2]));