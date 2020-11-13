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