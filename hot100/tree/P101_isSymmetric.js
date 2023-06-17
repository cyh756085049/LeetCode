function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * 101. 对称二叉树
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * @param root
 * @returns {boolean|*}
 */
const isSymmertic = (root) => {
    // 传入两个相同的树，递归比较树1左子树和树2右子树，相等则对称
    return isMirror(root, root);
}

const isMirror = (root1, root2) => {
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1 === null || root2 === null) {
        return false;
    }

    let flag = (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror((root2.left, root1.right));
    return flag;
}