/**
 * 剑指 Offer 27. 二叉树的镜像
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 *
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const mirrorTree = function (root) {
    if (root === null) {
        return [];
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

console.log(mirrorTree(treeNode));
