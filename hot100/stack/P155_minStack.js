var MinStack = function() {
    // 主栈，用来维护正常的入栈出栈数据
    this.stack1 = [];
    // 辅助栈，维护最小栈，栈顶自下而上依次递减，最上面的始终为最小值
    this.stack2 = [];
};

/** 入栈
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 主栈直接入栈
    this.stack1.push(val);
    // 辅助栈需要判断当前栈顶的值是否大于等于当前入栈的值，如果是，则辅助栈也入栈，否则，不如栈
    if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= val) {
        this.stack2.push(val);
    }
};

/**
 * 出栈
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 主栈正常出栈，辅助栈需要判断主栈出栈的值时候和辅助栈栈顶的值是否相等，如果相等，则辅助栈也出栈
    if (this.stack2.length && this.stack1.pop() === this.stack2[this.stack2.length - 1] ) {
        this.stack2.pop();
    }
};

/**
 * 栈顶出栈
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (!this.stack1 || !this.stack1.length) {
        return;
    }
    // 直接出栈主栈栈顶的值
    return this.stack1[this.stack1.length - 1];
};

/**
 * 获取栈的最小值
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 直接出栈辅助栈的栈顶元素
    return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // 返回 -3.
minStack.pop();
console.log(minStack.top()); // 返回 0.
console.log(minStack.getMin()); // 返回 -2.

