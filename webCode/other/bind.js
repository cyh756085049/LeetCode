/**
 * bind 实现
 * @returns {function(): *}
 */
Function.prototype.myBind = function myBind() {
    let [thisArg, ...args] = [...arguments];
    if (!thisArg) {
        thisArg = typeof window === 'undefined' ? global : window;
    }
    let that = this;
    return function () {
        // 防止第二次调用 func 时，该func已经被delete了，需要重新赋值
        if (!thisArg.func) {
            thisArg.func = that;
        }
        let result = thisArg.func(...args);
        // thisArg原本没有func方法
        delete thisArg.func;
        return result;
    }
}