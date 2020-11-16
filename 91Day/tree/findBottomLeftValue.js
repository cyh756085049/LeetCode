/**
 * 513. 找树左下角的值
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    if (root == null) return 0;
    let queue = [];
    queue.push(root);
    let res;
    while(queue.length > 0) {
        let cur = queue.shift();
        res = cur.val;
        if (cur.right) {
            queue.push(cur.right);
        }
        if (cur.left) {
            queue.push(cur.left);
        }
    }
    return res;
}