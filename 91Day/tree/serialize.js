/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root == null) return root;
    const leftSerialized = serialize(root.left);
    const  rightSerialized = serialize(root.right);
    return root.val + ',' + leftSerialized + rightSerialized;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const list = data.split(',');
    const buildTree = (list) => {   // dfs函数，构建当前子树
        const rootVal = list.shift(); // 弹出首项，获取它的“数据”
        if (rootVal == "X") {         // 是X，返回null节点
            return null;
        }
        const root = new TreeNode(rootVal); // 不是X，则创建节点
        root.left = buildTree(list);        // 递归构建左子树
        root.right = buildTree(list);       // 递归构建右子树
        return root;                        // 返回当前构建好的子树
    };

    return buildTree(list); // 构建的入口
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */