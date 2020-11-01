## 数组
### 61. 加1
#### 思路
* 先获取数组的长度，逆序遍历数组
    * 如果数组最后一位数字不为9，则直接对数组最后一位数字加1,然后返回数组
    * 否则，当数组最后一位数字为9时，则把值置为0，然后继续执行循环判断
* 最后，数组遍历结束，说明最高位仍然为9，需要进位，在数组头部添加1
#### 代码
```js
var plusOne = function(digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else { 
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};
```
#### 复杂度
时间复杂度：O(n)，n为数组长度<br/>
空间复杂度：O(1)
