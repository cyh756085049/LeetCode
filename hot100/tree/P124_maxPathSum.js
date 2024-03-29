/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    if (root === null) {
        return 0;
    }

    // 返回经过root的单边分支最大和
    const dfs = (root) => {
        if (root === null) {
            return 0;
        }

        // 计算左边分支的最大值，左边分支为负数则不计算
        let leftMax = Math.max(0, dfs(root.left));
        // 计算右边分支的最大值，右边分支为负数则不计算
        let rightMax = Math.max(0, dfs(root.right));
        // 更新最大值
        max = Math.max(max, root.val + leftMax + rightMax);
        // 返回经过root的单边最大分支给当前root的父节点使用
        return root.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return max;
};

/**
 * 输入：root = [1,2,3]
 * 输出：6
 * 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 *
 * 输入：root = [-10,9,20,null,null,15,7]
 * 输出：42
 * 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 */

const root = new TreeNode(-10);
root.left = new TreeNode(9, null, null);
root.right = new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null));


// const root = new TreeNode(-3, null, null);
console.log(maxPathSum(root));
