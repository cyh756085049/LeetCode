/**
 * apply 函数实现
 * @returns {*}
 */
Function.prototype.myApply = function myApply() {
    // 第一个参数为this对象，第二个参数为数组（与myCall唯一的区别就在第二个参数是数组）
    let [thisArg, args] = Array.from(arguments);
    if (!thisArg) {
        thisArg = typeof window === 'undefined' ? global : window;
    }
    thisArg.func = this;
    let result = thisArg.func(...args);
    delete thisArg.func;
    return result;
}