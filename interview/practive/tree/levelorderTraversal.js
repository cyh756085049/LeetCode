function TreeNode(left, right, val) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const levelorderTraversal = (root) => {
    let results = [];
    if (!root) {
        return results;
    }
    // 使用队列保存每一层的结点
    let queues = [];
    queues.push(root);

    while (queues.length > 0) {
        let size = queues.length;
        // 保存每一层的数据
        let levelResult = [];
        // 将当前层的节点出队，当前层的左右子节点入队
        while (size > 0) {
            const node = queues.shift();
            levelResult.push(node.val);
            if (node.left) {
                queues.push(node.left);
            }
            if (node.right) {
                queues.push(node.right);
            }
            size--;
        }
        results.push(levelResult);
    }

    return results;
}