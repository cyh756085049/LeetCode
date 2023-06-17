/**
 * 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * 1、树为 二叉搜索树 ，2、树的所有节点的值都是 唯一 的。根据以上条件，可方便地判断 p,q 与 root 的子树关系，即：
 * 若 root.val<p.val ，则 p 在 root 右子树 中；
 * 若 root.val>p.val ，则 p 在 root 左子树 中；
 * 若 root.val=p.val ，则 p 和 root 指向 同一节点 。
 * @param root
 * @param p
 * @param q
 */
const lowestCommonAncestor = function (root, p, q) {
    while (root !== null) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else break;
    }

    return root;
}


/**
 * 1、树为 二叉树 ，2、树的所有节点的值都是 唯一 的。根据以上条件，可方便地判断 p,q 与 root 的子树关系，即：
 * p 和 q 在 root 的子树中，且分列 root 的 异侧（即分别在左、右子树中）；
 * p=root，且 q 在 root 的左或右子树中；
 * q=root，且 p 在 root 的左或右子树中；
 * @param root
 * @param p
 * @param q
 * @returns {*}
 */
const lowestCommonAncestorTwo = function (root, p, q) {
    if (root === null || root === p || root === q) return root;
    let left = lowestCommonAncestorTwo(root.left, p, q);
    let right = lowestCommonAncestorTwo(root.right, p ,q);
    if (left === null) return right;
    if (right === null) return left;
    return root;
}

// [6,2,8,0,4,7,9,null,null,3,5]
let root = new TreeNode(6);
let rootLeft = root.left = new TreeNode(2);
let rootRight = root.right = new TreeNode(8);

rootLeft.left = new TreeNode(0);
let right = rootLeft.right = new TreeNode(4);
rootRight.left = new TreeNode(7);
rootRight.right = new TreeNode(9);

right.left = new TreeNode(3);
right.right = new TreeNode(5);

// 二叉搜索树
console.log('节点：');
console.log(lowestCommonAncestor(root, right.left, rootRight.right));
console.log('节点值：');
console.log(lowestCommonAncestor(root, right.left, rootRight.right).val);

// 二叉树
console.log('节点：');
// console.log(lowestCommonAncestorTwo(root, rootLeft, rootRight));
console.log(lowestCommonAncestorTwo(root, right.left, rootRight.right));
console.log('节点值：');
console.log(lowestCommonAncestorTwo(root, right.left, rootRight.right).val);
// console.log(lowestCommonAncestorTwo(root, rootLeft, rootRight).val);



