function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，
 * inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * @param preorder
 * @param inorder
 */
const buildTree = (preorder, inorder) => {
    if (preorder.length === 0) {
        return null;
    }
    // 以先序遍历数组中的第一个节点作为根节点
    let root = new TreeNode(preorder[0]);
    // 在中序数组中找到根节点的值对应的索引
    let index = inorder.indexOf(preorder[0]);
    // 使用找到的中序遍历数组根节点的索引切分中序数组为左右两部分
    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index + 1);
    // 使用切割后中序数组左子树的数组长度，将先序遍历数组分为左右两部分
    let preorderLeft = preorder.slice(1, inorderLeft.length + 1);
    let preorderRight = preorder.slice(inorderLeft.length + 1);
    // 最后对分割后的左子树和右子树继续进行递归
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);

    return root;
}

/**
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 */

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder));