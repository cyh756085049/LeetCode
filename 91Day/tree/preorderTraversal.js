/**
 * Definition for a binary tree node
 * @param val
 * @constructor
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = [];
    const preOrder = (root) => {
        if (root === null) return [];
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return res;
}

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return res;
}