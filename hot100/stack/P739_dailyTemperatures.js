/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const answer = new Array(len).fill(0);

    // 单调栈，维护温度对应的下标
    let stack = [];
    for (let i = 0; i < len; i++) {
        let curTemperature = temperatures[i];
        // 栈不为空且当前温度大于栈顶的下标对于的温度
        while (stack.length && temperatures[stack[stack.length - 1]] < curTemperature) {
            let lowerTemperatureIndex = stack.pop();
            // answer下标是刚出栈的栈顶元素
            answer[lowerTemperatureIndex] = i - lowerTemperatureIndex;
        }
        // 栈保存温度对于的下标
        stack.push(i);
    }

    return answer;
};

/**
 * 输入: temperatures = [73,74,75,71,69,72,76,73]
 * 输出: [1,1,4,2,1,1,0,0]
 */

const temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures));