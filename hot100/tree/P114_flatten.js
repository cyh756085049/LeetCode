function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * 114. 二叉树展开为链表
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * @param root
 */
const flatten = (root) => {
    if (!root) {
        return root;
    }
    // 首先对根节点进行先序遍历，使用栈实现
    const stack = [];
    // 保存先序遍历后的节点, 因为展开后的单链表要同样使用 TreeNode
    const result = [];
    while (root || stack.length) {
        while (root) {
            result.push(root);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }

    // 将保存后的先序遍历节点转化为单链表，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null
    for (let i = 1; i < result.length; i++) {
        let pre = result[i - 1];
        let cur = result[i];
        pre.left = null;
        pre.right = cur;
    }

    return result;
}

/**
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 */