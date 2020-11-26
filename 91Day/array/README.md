## 数组
### [66. 加一](https://leetcode-cn.com/problems/plus-one/)
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

### [821. 字符的最短距离](https://leetcode-cn.com/problems/shortest-distance-to-a-character/)
#### 思路
* 先对字符串进行分割，转化为数组。然后遍历字符串数组，寻找所有与字符C匹配的字符，并将下标保存到newStr数组。
* 再次遍历字符串数组，定义一个最小值。新创建一个数组，首先判断字符与C是否相等
    * 如果相等，直接在数组中添加0
    * 否则，判断遍历的字符下标与保存字符C下标的数组距离最小值，然后把最小值添加到数组中
* 最后，数组遍历结束，返回数组
#### 代码
```js
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
    let arr = S.split("");
        let newStr = [];
        let resArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === C) {
                newStr.push(i);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            let min = Math.abs(i - newStr[0]);
            if (arr[i] === C) {
               resArr.push(0);
            } else {
                newStr.forEach(item => {
                    let tmp = Math.abs(i - item);
                    min = Math.min(min, tmp);
                })
                resArr.push(min);
            }
        }
        return resArr;
}
```
#### 复杂度
时间复杂度：O(n*m)，n为字符串长度,m为包含所有字符C的数组长度<br/>
空间复杂度：O(n),开辟了新的数组
### [35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)
#### 思路
二分查找
#### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);
        if (nums[middle] === target) return middle;
        else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return left;
};
```
#### 复杂度
时间复杂度：O(log(n))
空间复杂度：O(1)
### []()
#### 思路

#### 代码
```js

```
#### 复杂度
时间复杂度：O()
空间复杂度：O()
