## 栈
### [1381. 设计一个支持增量操作的栈](https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/)
#### 思路
* 首先用maxSize初始化栈中最多能容纳的数量，并初始化一个空的栈数组。
    * push方法：首先比较栈数组的长度与栈的最大容量，如果小于，则通过数组的push方法进行添加；否则，返回栈数组。
    * pop方法：首先判断栈数组的长度，如果为0；则返回-1，否则使用数组的pop方法弹出栈顶元素，并返回栈顶的值。
    * increment方法：首先判断栈数组长度与k的大小，如果小于k，遍历栈数组，让栈数组中每个元素加上val；否则遍历数组的前k个元素，让每个元素加上val;最后返回栈数组。
#### 代码
```js
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
    return this.stack;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (!this.stack.length) {
        return -1;
    } else {
        return this.stack.pop();
    }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if (this.stack.length < k) {
        for (let i = 0; i < this.stack.length; i++) {
            this.stack[i] = this.stack[i] + val;
        }
    } else {
        for (let i = 0; i < k; i++) {
            this.stack[i] += val;
        }
    }
    return this.stack;
};
```
#### 复杂度
时间复杂度：
* push方法：O(1)<br/>
* pop方法：O(1)<br/>
* increment方法：O(n)，n为栈数组长度或者k的大小<br/>
空间复杂度：O(n),开辟了新的数组
> 纪念第一次过100% 😺
![image-20201103233858505](https://tva1.sinaimg.cn/large/0081Kckwly1gkcetraoi0j30z60cq0u8.jpg)