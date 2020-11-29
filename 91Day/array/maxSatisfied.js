/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let total = 0;
    // 先计算老板不生气时的所有满意顾客
    for (let i = 0; i < customers.length; i++) {
        if (!grumpy[i]) {
            total += customers[i];
        }
    }
    let max = total;
    for (let i = 0; i < customers.length; i++) {
        // 第一个滑动窗口中如果有不满意的顾客，将其改为满意的
        if (i < X && grumpy[i]) {
            total += customers[i];
            // 滑动窗口右移中，(i - X, i] 这段就是滑动窗口
        } else {
            // 左边界离开情绪控制区，如果原本是不满意的顾客，就恢复不满意
            if (grumpy[i - X]) total -= customers[i - X];
            // 右边界进入情绪控制区，不满意顾客变成满意的了
            if (grumpy[i]) total += customers[i];
        }
        if (total > max) max = total;
    }
    return max;
};