### 位运算
#### 思路
位运算:先通过charAtcode 计算需要移动的位数; 0 与 左移的结果进行与运算 如果非 0 说明重复
#### 代码
```js
const isUnique = function(str) {
    let flag = 0
    for(let char of str) {
        const c = char.charCodeAt() - 97 
        if((flag & (1<<c))!== 0) return false
        flag = flag | (1<<c)
    }
    return true
}
```
#### 复杂度
时间复杂度：O(n)
空间复杂度：O(1)