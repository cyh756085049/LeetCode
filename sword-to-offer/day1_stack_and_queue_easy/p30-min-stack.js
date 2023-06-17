/**
 * 剑指 Offer 30. 包含min函数的栈
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

const MinStack = function () {
    this.stack1 = [];
    this.stack2 = [];
}

MinStack.prototype.push = function (value) {
    this.stack1.push(value);
    if (!this.stack2.length) {
        this.stack2.push(value);
    } else {
        if (value <= this.stack2[this.stack2.length - 1]) {
            this.stack2.push(value);
        }
    }
}

MinStack.prototype.pop = function () {
    if (this.stack1.length) {
        const val = this.stack1.pop();
        if (this.stack2.length && val === this.stack2[this.stack2.length - 1]) {
            this.stack2.pop();
        }
    }
}

MinStack.prototype.top = function () {
    if (!this.stack1.length) {
        return null;
    }
    return this.stack1[this.stack1.length - 1];
}

MinStack.prototype.min = function () {
    if (!this.stack2.length) {
        return null;
    }
    return this.stack2[this.stack2.length - 1];
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min());
console.log(minStack.top());
minStack.pop();
minStack.pop();
console.log(minStack.min());
