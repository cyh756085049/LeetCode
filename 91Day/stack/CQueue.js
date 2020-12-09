/**
 * 剑指 Offer 09. 用两个栈实现队列
 * @constructor
 */
var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    while(this.stack1.length) {
        this.stack2.push(this.stack1.pop());
    }
    if (!this.stack2.length && !this.stack1.length) return -1;
    let res = this.stack2.pop();
    return res;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */


var CQueue1 = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail1 = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead1 = function() {
    if(this.stack2.length) return this.stack2.pop();
    while(this.stack1.length) {
        this.stack2.push(this.stack1.pop());
    }
    let res = this.stack2.pop();
    return res || -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */