function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * @param root
 * @returns {*[]}
 */
const inorderTraversal = (root) => {
    // 保存结果集
    const res = [];
    // 用栈保存节点
    const stack = [];
    let cur = root;
    // 中序遍历：左根右
    while (cur !== null || stack.length > 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }

        const node = stack.pop();
        res.push(node.val);
        cur = node.right;
    }

    return res;
}

/**
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 */
