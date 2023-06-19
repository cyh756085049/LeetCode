/**
 * 46. 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 保存结果集
    let res = [];
    // 保存已经被遍历过的元素
    let path = [];

    // 使用一个used数组来记录哪些元素已经使用过，将已经使用过的添加到path中
    const dfs = (used) => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        // 遍历nums
        for (let i = 0; i < nums.length; i++) {
            // 如果当前位置为1，表示当前元素已经使用过
            if (used[i] === 1) {
                continue;
            }
            // 当前位置不为1，则表示还未被使用，将其加入到path数组中
            path.push(nums[i]);
            // 将当前元素标记为已使用过
            used[i] = 1;
            // 继续递归
            dfs(used);
            // 回溯
            used[i] = 0;
            path.pop();
        }
    }

    // 递归回溯
    dfs([]);

    return res;
};

/**
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

const nums = [1, 2, 3];
console.log(permute(nums));