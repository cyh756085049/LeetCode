/**
 * 剑指 Offer 28. 对称的二叉树
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    let queue = [];
    let result = [];
    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;

        while (size > 0) {
            const node = queue.shift();
            result.push(node.val);

            if (node.right) {
                queue.push(node.right);
            }
            if (node.left) {
                queue.push(node.left);
            }
            size--;
        }
    }
    return result;
}

const treeNode = new TreeNode(4);
treeNode.left = new TreeNode(2);
treeNode.right = new TreeNode(7);
treeNode.left.left = new TreeNode(1);
treeNode.left.right = new TreeNode(3);
treeNode.right.left = new TreeNode(6);
treeNode.right.right = new TreeNode(9);


