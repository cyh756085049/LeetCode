## 树
### [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/)
#### 思路
递归：当根节点为空时，返回深度为0；当根节点不为空且无左子树和右子树时，返回深度为1，
否则，递归分别计算出左子树和右子树的高度并取最大值，然后加1，就是当前二叉树的最大深度。
#### 代码
```js
/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
};
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)
### [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
#### 思路
深度优先遍历：当两棵树的当前节点都为 null 时返回 true，当其中一个为 null 另一个不为 null 时返回 false，
当两个都不为空但是值不相等时，返回 false，最后递归判断左子树和右子树是否相同并返回。    
#### 代码
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p == null && q == null) {
        return true;
    } 
    if(p == null || q == null) {
        return false;
    } 
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)
### [129. 求根到叶子节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)
#### 思路
深度优先遍历：从根节点开始，遍历每个节点，如果遇到叶子节点，则将叶子节点对应的数字加到数字之和。
如果当前节点不是叶子节点，则计算其子节点对应的数字，然后对子节点递归遍历。
#### 代码
```js
/**
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
var sumNumbers = function(root) {
    return helper(root, 0);
};

function helper(root, curVal) {
    if(root == null) return 0;
    curVal = curVal * 10 + root.val;
    if(root.left == null && root.right == null) {
        return curVal;
    }
    return helper(root.left, curVal) + helper(root.right, curVal);
}
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)
### [513. 找树左下角的值](https://leetcode-cn.com/problems/find-bottom-left-tree-value/)
#### 思路
层序遍历：每层从右到左进行层序遍历，最后一个就是左下角的元素。
#### 代码
```js
/**
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
var findBottomLeftValue = function(root) {
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
};
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(n)

### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()

### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()

### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()