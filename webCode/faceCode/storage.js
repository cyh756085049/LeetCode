/**
 * localStorage 设置过期时间
 *
 * lscache.get(key); // xx
 * lscache.set(key, value, expire);
 * lscache.remove(key);
 */

// 参考：https://github.com/lgjlife/micro-blog/blob/master/FrontEnd/microblog/cache/cache.js
var cache = {
    "key": {
        "expiredTime": "EXPIRED:TIME",
        "expiredStartTime": "EXPIRED:START:TIME",
    },
    // 设置缓存
    "set": function(key, value, expire) {
        console.log("cache set: key=" + key + "value=" + value + "expiredTime=" + expire);
        if ((expire === 0) || (expire == null)) {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
            localStorage.setItem(key + cache.key.expiredTime, expire);
            localStorage.setItem(key + cache.key.expiredStartTime, new Date().getTime());
        }
    },
    // 获取键
    "get": function (key) {
        var expiredTime = localStorage.getItem(key + cache.key.expiredTime);
        var expiredStartTime = localStorage.getItem(key + cache.key.expiredStartTime);
        var curTime = new Date().getTime();
        var sum = Number(expiredTime) + Number(expiredStartTime);
        if (sum > curTime) {
            console.log("缓存存在");
            return JSON.parse(localStorage.getItem(key));
        } else {
            console.log("缓存不存在");
            cache.remove(key);
            return null;
        }
    },
    // 移除键
    "remove": function (key) {
        localStorage.removeItem(key);
        localStorage.removeItem(key + cache.key.expiredTime);
        localStorage.removeItem(key + cache.key.expiredStartTime);
    },
    // 对键重新更新过期时间
    "expired": function (key, expiredTime) {
        if (cache.get(key) != null) {
            localStorage.setItem(key + cache.key.expiredTime, expiredTime);
        }
    },
    // 清除所有缓存
    "clear": function () {
        localStorage.clear();
    }

}


/**
 * 参考：https://blog.csdn.net/zhaoxiang66/article/details/86703438
 */
class Storage {
    constructor(name) {
        this.name = 'storage';
    }
    // 设置缓存
    setItem(params) {
        let obj = {
            name: '',
            value: '',
            expires: "",
            // 记录何时把值存入缓存，毫秒级
            startTime: new Date().getTime()
        }
        let options = {};
        // 将obj和传过来的params合并
        Object.assign(options, obj, params);
        if (options.expires) {
            localStorage.setItem(options.name, JSON.stringify(options));
        } else {
            // 如果options.expires没有设置,就判断一下value的类型
            let type = Object.prototype.toString.call(options.value);
            if (type === '[object Object]') {
                options.value = JSON.stringify(options.value);
            }
            if (type === '[object Array]') {
                options.value = JSON.stringify(options.value);
            }
            localStorage.setItem(options.name, options.value);
        }
    }
    // 获取缓存
    getItem(name) {
        let item = localStorage.getItem(name);
        // 先将取到的json转化为对象的形式
        try{
            item = JSON.parse(item);
        }catch (error) {
            //如果不是json字符串，就直接返回
            item = item;
        }
        if (item.startTime) {
            let date = new Date().getTime();
            // 取出时间与存入时间的差大于过期时间，则过期
            if (date - item.startTime > item.expires) {
                // 缓存过期，清除缓存
                localStorage.removeItem(name);
                return false;
            } else {
                // 缓存未过期，返回值
                return item.value;
            }
        } else {
            // 没有设置失效时间，直接返回值
            return item;
        }
    }
    // 移除缓存
    removeItem(name) {
        localStorage.removeItem(name);
    }

    // 移出全部缓存
    clear() {
        localStorage.clear();
    }
}

let storage = new Storage();
storage.setItem({
    name: "name",
    value: "value"
})

let value = storage.getItem('name');
console.log('我是value', value);