/**
 * 剑指 Offer 37. 序列化二叉树
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，
 * 你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 */

const TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let str = '';
const serialize = function(root) {
    return reSerialize(root, '');
};

const reSerialize = (root, str) => {
    if (root === null) {
        str += "None,";
    } else {
        str += root.val + ",";
        str = reSerialize(root.left, str);
        str = reSerialize(root.right, str);
    }
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    const arr = data.split(',');
    console.log(data, arr);
    return reDeserialize(arr);
};

const reDeserialize = function (arr) {
    if (arr[0] === 'None') {
        arr.shift();
        return null;
    }

    const root = new TreeNode(parseInt(arr[0]));
    arr.shift();
    root.left = reDeserialize(arr);
    root.right = reDeserialize(arr);

    return root;
}

const root = new TreeNode(1);
const leftRoot = new TreeNode(2);
const rightRoot = new TreeNode(3);
root.left = leftRoot;
root.right = rightRoot;
leftRoot.left = null;
leftRoot.right = null;
rightRoot.left = new TreeNode(4);
rightRoot.right = new TreeNode(5);

console.log(serialize(root));
console.log(root);
console.log(deserialize(serialize(root)));
