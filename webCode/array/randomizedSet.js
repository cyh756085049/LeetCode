/**
 * LeetCode 380. 常数时间插入、删除和获取随机元素
 * 设计一个支持在平均时间复杂度 O(1)下，执行以下操作的数据结构。
 insert(val)：当元素 val 不存在时，向集合中插入该项。
 remove(val)：元素 val 存在时，从集合中移除该项。
 getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。

 方法1：Map()
 * Initialize your data structure here.
 */
let RandomizedSet = function () {
    this.map = new Map();
    this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // 存在
    if (this.map.has(val)) {
        return false;
    }
    // 不存在
    this.map.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // 不存在
    if (!this.map.has(val)) {
        return false;
    }
    const index = this.map.get(val);
    // 存在且为最后一个元素
    if (index === this.values.length - 1) {
        this.values.pop();
        this.map.delete(val);
    } else {
        // 存在且不为最后一个元素
        const value = this.values.pop();
        this.values[index] = value;
        this.map.set(value, index);
        this.map.delete(val);
    }
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const length = this.values.length;
    const radom = Math.floor(Math.random() * length);
    return this.values[radom];
};


RandomizedSet = function () {
    this.set = new Set();
};

RandomizedSet.prototype.insert = function(val) {
    // 存在
    if (this.set.has(val)) {
        return false;
    }
    // 不存在
    this.set.add(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    // 不存在
    if (!this.set.has(val)) {
        return false;
    }
    this.set.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const radom = parseInt(Math.random() * (this.set.size));
    return [...this.set][radom];
};

/**
 * 测试
 */
var obj = new RandomizedSet();
var param_1 = obj.insert(1);
console.log(param_1);
var param_2 = obj.insert(2);
console.log(param_2);
var param_3 = obj.remove(1);
console.log(param_3);
var param_4 = obj.getRandom();
console.log(param_4);