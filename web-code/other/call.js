/**
 * call 实现
 * @returns {*}
 */
Function.prototype.myCall = function myCall() {
    let [thisArg, ...args] = Array.from(arguments);
    if (!thisArg) {
        //context 为 null 或者是 undefined
        thisArg = typeof window === 'undefined' ? global : window;
    }
    // this 的指向的是当前函数 func (func.call)
    // 为thisArg对象添加func方法，func方法又指向myCall，所以在func中this指向thisArg
    thisArg.func = this;
    let result = thisArg.func(...args);
    // thisArg 上并没有 func 属性，因此需要移除
    delete thisArg.func;
    return result;
}