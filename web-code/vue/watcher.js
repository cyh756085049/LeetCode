/**
 * 订阅者 Watcher 实现
 * @param vm
 * @param exp
 * @param cb
 * @constructor
 */
// 1、watcher 构造器
function Watcher(vm, exp, cb) {
    // 一个 Vue 实例对象
    this.vm = vm;
    // 是 node 节点的 v-model 等指令的属性值或者插值符号{{ }}中的属性，比如 v-model = "name",exp 就是 name
    this.exp = exp;
    // Watcher 绑定的更新函数
    this.cb = cb;
    // 将自己添加到订阅器的操作
    this.value = this.get();
}

Watcher.prototype = {
    // 当数据发生变化时调用 watcher 自身的更新函数进行更新操作
    update: function () {
        this.run();
    },
    // 先通过 let value = this.vm.data[this.exp];
    // 获取到最新的数据,然后将其与之前 get() 获得的旧数据进行比较，
    // 如果不一样，则调用更新函数 cb 进行更新。
    run: function () {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    // 2、执行 get 函数
    get: function () {
        // 先将自己赋值为全局的订阅者
        Dep.target = this;
        // 强制执行监听器的get函数，会执行监测器 observer 中的 addSub 方法，
        // 把当前的 watcher 订阅到这个数据持有的watchers中，完成一个依赖收集的过程
        var value = this.vm.data[this.exp];
        // 依赖收集完成后，将 Dep.target 恢复成上一个状态
        Dep.target = null;
        return value;
    }
}