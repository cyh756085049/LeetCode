function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * 102. 二叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 * @param root
 */
const levelOrder = (root) => {
    // 保存最后的结果集
    let results = [];
    if (!root) {
        return results;
    }

    // 使用队列保存每一层的节点
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;
        // 保存每一层的节点数据
        let result = [];
        // 将当前层的节点出队，当前层的左右子节点入队
        while (size > 0) {
            const node = queue.shift();
            result.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            size--;
        }
        results.push(result);
    }

    return results;
}