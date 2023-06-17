/**
 * 老虎集团面试
 * @returns {string}
 */
function classNames() {
    // 存储 className 值
    var classes = [];
    for (let i = 0; i < arguments.length; i++) {
        // 获取实参
        var arg = arguments[i];
        // 跳过 false 条件
        if (!arg) continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        // 如果传入的参数是数组且长度大于0
        } else if (Array.isArray(arg) && arg.length) {
            // 调用自身函数，利用apply可以将数组转化成字符串
            var inner = classNames.apply(null, arg);
            // 现在是一个字符串，隐式判断布尔值
            if (inner) {
                classes.push(inner);
            }
        // 如果传入的参数是对象
        } else if (argType === 'object') {
            for (var key in arg) {
                // 判断 key 是否存在 arg 对象内并且 key 的值为 true
                if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
}