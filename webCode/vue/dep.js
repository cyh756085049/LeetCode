/**
 * 消息订阅器 Dep 实现
 * 用来容纳所有的订阅者，订阅器Dep主要负责收集订阅者，
 * 然后当数据变化后执行相应的订阅者的更新函数
 * @constructor
 */
// 订阅器Dep
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
};
Dep.target = null;

// 监测器 Observer
function defineReactive(data, key, val) {
    let dep = new Dep();
    Object.defineProperty(data, key, {
        get: function getter() {
            // 静态属性 Dep.target 是一个全局唯一的 Watcher
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function setter(newVal) {
            if (newVal === val) {
                return;
            }
            val = newVal;
            dep.notify();
        }
    })
}