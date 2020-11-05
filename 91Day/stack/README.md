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
>
![image-20201103233858505](https://tva1.sinaimg.cn/large/0081Kckwly1gkcetraoi0j30z60cq0u8.jpg)

### [394. 字符串解码](https://leetcode-cn.com/problems/decode-string/)
#### 思路
* 使用辅助栈来实现。由内向外，一层一层解决[]，遇到数字，读取数字，遇到`[`，让字符串进入栈等待，完成进栈后，清零，倍数进入栈等待，
完成进栈后清零；遇到 `]`后，两个栈顶出栈，获取重复次数，遇到字母，追加到字符串
#### 代码
```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let res = '';
    for (const char of s) {
        if (!isNaN(char)) {
            num = num * 10 + Number(char);
        } else if (char === '[') {
            strStack.push(res);
            res = '';
            numStack.push(num);
            num = 0;
        } else if (char === ']') {
            let repeat = numStack.pop();
            res = strStack.pop() + res.repeat(repeat);
        } else {
            res += char;
        }
    }
    return res;
};
```
#### 复杂度
时间复杂度：O(n)，n为数组长度<br/>
空间复杂度：O(n),开辟了新的数组

### [232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)
#### 思路
使用两个栈来实现，一个栈用于元素进栈，一个栈用于元素出栈。
#### 代码
```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let cur = null;
    while ((cur = this.stack1.pop())) {
        this.stack2.push(cur);
    }
    this.stack2.push(x);
    while ((cur = this.stack2.pop())) {
        this.stack1.push(cur);
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```
#### 复杂度
时间复杂度：O(n)，n为栈中元素的个数<br/>
空间复杂度：O(n),开辟了新的栈数组空间