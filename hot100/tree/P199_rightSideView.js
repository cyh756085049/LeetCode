function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * 199. 二叉树的右视图
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 */
const rightSideView = (root) => {
    // 保存右视图节点值
    const result = [];
    if (!root) {
        return root;
    }
    // 对二叉树进行层序遍历，使用队列实现，然后保存每一层的最后一个节点值
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

            if (i === size - 1) {
                result.push(node.val);
            }
        }
    }

    return result;
}