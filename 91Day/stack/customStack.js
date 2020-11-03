/**
 * 1381. 设计一个支持增量操作的栈
 * 用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，
 * 栈在增长到 maxSize 之后则不支持 push 操作
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/**
 * 如果栈还未增长到 maxSize ，就将 x 添加到栈顶
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
 * 栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，
 * 则栈中的所有元素都增加 val
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

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
var obj = new CustomStack(3);
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.pop());
console.log(obj.push(2));
console.log(obj.push(3));
console.log(obj.push(4));
console.log(obj.increment(5,100));
console.log(obj.increment(2,100));
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());