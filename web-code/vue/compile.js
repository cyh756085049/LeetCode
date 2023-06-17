/**
 * 解析器 Compile 实现
 * 解析器 Compile 实现步骤：
 * 1、解析模板指令，并替换模板数据，初始化视图；
 * 2、将模板指令对应的节点绑定对应的更新函数，初始化相应的订阅器；
 * @param node
 * @param exp
 */
function compileText(node, exp) {
    var self = this;
    var initText = this.vm[exp];
    this.updateText(node, initText);
    // 将这个指令初始化为一个订阅者，后续 exp 改变时，就会触发这个更新回调，从而更新视图
    new Watcher(this.vm, exp, function (value) {
        self.updateText(node, value);
    })
}