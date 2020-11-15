/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 129. 求根到叶子节点数字之和
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return helper(root, 0);
};

function helper(root, curVal) {
    if(root == null) return 0;
    curVal = curVal * 10 + root.val;
    if(root.left == null && root.right == null) {
        return curVal;
    }
    return helper(root.left, curVal) + helper(root.right, curVal);
}