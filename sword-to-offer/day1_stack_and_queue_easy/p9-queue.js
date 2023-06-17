/**
 * 剑指 Offer 09. 用两个栈实现队列
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */

/**
 * @constructor
 */
const Queue = function () {
    this.stack1 = [];
    this.stack2 = [];
}

Queue.prototype.appendTail = function (value) {
    this.stack1.push(value);
}

Queue.prototype.deleteHead = function () {
    if (!this.stack2.length) {
        if (!this.stack1.length) {
            return -1;
        }

        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
}

const queue = new Queue();
queue.appendTail(3);
queue.appendTail(5);
console.log(queue.deleteHead());
queue.appendTail(7);
console.log(queue.deleteHead());
console.log(queue.deleteHead());




