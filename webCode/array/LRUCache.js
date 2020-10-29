/**运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。
 * 它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。
 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.keys = [];
    this.cache = Object.create(null);
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache[key]) {
        // 调整位置
        remove(this.keys, key);
        this.keys.push(key);
        return this.cache[key];
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache[key]) {
        // 存在即更新
        this.cache[key] = value;
        remove(this.keys, key);
        this.keys.push(key);
    } else {
        // 不存在即及加入
        this.keys.push(key);
        this.cache[key] = value;
        // 判断缓存是否已超过最大值
        if (this.keys.length > this.capacity) {
            removeCache(this.cache, this.keys, this.keys[0]);
        }
    }
};

// 移除 key
function remove(arr, key) {
    if (arr.length) {
        const index = arr.indexOf(key);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

// 移除缓存中 key
function removeCache(cache, keys, key) {
    cache[key] = null;
    remove(keys, key);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

