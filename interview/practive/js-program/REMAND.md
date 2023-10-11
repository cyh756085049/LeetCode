
### 1、[手写数组去重、扁平化函数【携程、蘑菇街、哔哩哔哩、腾讯】](https://github.com/sisterAn/JavaScript-Algorithms/issues/30#top)

#### 数组扁平化(数组降维)

##### <1>  `flat` 方法

> MDN：`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

```js
const arr = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]
// 不传参数时，默认扁平化一层
arr.flat(); // ['a', 'b', 'c', 'd', ['e', ['f']], 'g'];

// 传入一个整数参数，整数即扁平化的层数
arr.flat(2); // ['a', 'b', 'c', 'd', 'e', ['f'], 'g'];

// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组【Infinity 属性用于存放表示正无穷大的数值】
arr.flat(Infinity); // ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// 传入 <=0 的整数将返回原数组，不扁平化
arr.flat(0); // ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]
arr.flat(-1); // ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]

// 如果原数组有空位，flat()方法会跳过空位
['a', 'b', 'c', 'd', , , ].flat(); // ['a', 'b', 'c', 'd']
```

**`Array.prototype.flat()` 特性总结：**

- 将嵌套的数组扁平化，变成一维的数组。**该方法返回一个新数组，对原数据没有影响。**
- 不传参数时，默认扁平化一层，可以传入一个整数，表示想要扁平化的层数。
- 传入 `<=0` 的整数将返回原数组，不扁平化。
- `Infinity` 关键字作为参数时，无论多少层嵌套，都会转为一维数组。
- 如果原数组有空位，`Array.prototype.flat()` 会跳过空位。

**实现 `flat` 方法**

```js
const flat = (arr, depth = 1) => {
    if (depth > 0) {
      return arr.reduce((previousValue, currentValue) => {
        if (Array.isArray(currentValue)) {
          return [...previousValue, ...flat(currentValue, depth - 1)];
        } else {
          return [...previousValue, currentValue];
        }
      })
    } else {
      return arr;
    }
  }
// 测试方法
const arr = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]];
console.log('实现的flat方法',
  '\n默认扁平化一层：', flat(arr), 
  '\n扁平化两层：', flat(arr, 2), 
  '\nInfinity 关键字作为参数:', flat(arr, Infinity), 
  '\n传入 <=0 的整数:', flat(arr, 0), flat(arr, -1), 
  '\n原数组有空位:', flat(['a', 'b', 'c', 'd', , , ]),
  );
```

##### <2> `reduce` 方法

一次扁平化所有数组

```js
const flattenDeepByReduce = (arr) => {
    if (Array.isArray(arr)) {
      return arr.reduce((previousValue, currentValue) => {
        return [...previousValue, ...flattenDeepByReduce(currentValue)];
      }, []);
    } else {
      return [arr];
    }
  }
const arr = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]];
 console.log('一次扁平化所有数据', flattenDeepByReduce(arr)); // ["a", "b", "c", "d", "e", "f", "g"]
```

##### <3> 栈方法

一次扁平化所有数组

```js
// 通过栈方法实现
  const flattenDeepByStack = (arr) => {
    const result = [];
    const stack = [...arr];
    // 栈不为空，循环遍历
    while (stack.length > 0) {
      // 出栈
      const val = stack.pop();
      // 如果当前出栈元素仍然是数组，则继续展开该层数组入栈
      if (Array.isArray(val)) {
        stack.push(...val);
      } else {
        // 否则，用头插法插入到结果数组中
        result.unshift(val);
      }
    }
    return result;
  }

  const arr = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]];
  console.log('通过栈实现一次扁平化所有数据:', flattenDeepByStack(arr));
```

#### 数组去重

* **产生新数组去重方式**

##### <1> `Set` 方法

```js
const uniqueBySet = (arr) => {
    const setArr = new Set(arr);
    // return [...setArr];
    return Array.from(setArr);
  }

const duplicateArray = [1, 2, 3, 3, 5, 4];
console.log('通过set实现数组去重：', uniqueBySet(duplicateArray)); // [1, 2, 3, 5, 4]
```

##### <2> `reduce`  方法

```js
const uniqueByReduce = (arr) => {
    // 先对数组进行排序
    arr.sort((a, b) => a - b);
    return arr.reduce((previous, current) => {
      if (previous.length === 0 || previous[previous.length - 1] !== current) {
        previous.push(current);
      }
      return previous;
    }, []);
  }

  const duplicateArray = [1, 2, 3, 3, 5, 4];
  console.log('通过reduce实现数组去重：', uniqueByReduce(duplicateArray));
```

##### <3> `filter` 方法

```js
const uniqueByFilter = (arr) => {
    return arr.filter((value, index, array) => {
      return array.indexOf(value) === index;
    })
  }
  const duplicateArray = [1, 2, 3, 3, 5, 4];
  console.log('通过filter方法实现数字去重:', uniqueByFilter(duplicateArray));
```

* **不产生新数组的去重方式**

##### <1> 排序去重

```js
const removeDuplicatesBySort = (arr) => {
    arr.sort();
    let index = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[j - 1]) {
        arr[index] = arr[j];
        index++;
      }
    }
    console.log('index', index, arr);
    // 把最后一个重复项删除
    arr.splice(index);
    return arr;
  }

const arr = [1,2,3,1,3];
console.log('不产生新数组的情况下，通过排序及遍历实现删除重复数字：', removeDuplicatesBySort(arr));
```

##### <2> `indexOf` 去重

```js
const removeDuplicatesByIndexOf = (arr) => {
    let len = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr.indexOf(arr[i]) !== i) {
        arr[i] = arr[len];
        len--;
      }
    }
    arr.splice(len + 1);
    return arr;
  }

  const arr = [1,2,3,1,3];
  console.log('不产生新数组的情况下，通过indexOf及遍历实现删除重复数字：', removeDuplicatesByIndexOf(arr));
```

### 2、[写一个数组（包含对象等类型元素）去重函数【蘑菇街】](https://github.com/sisterAn/JavaScript-Algorithms/issues/136)

题目：

1. 如传入的数组元素为 `[123, "meili", "123", "mogu", 123]` ，则输出： `[123, "meili", "123", "mogu"]`
2. 如传入的数组元素为 `[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]` ，则输出： `[123, [1, 2, 3], [1, "2", 3], "meili"]`
3. 如传入的数组元素为 `[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]` ，则输出： `[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]`

#### 使用 `JSON.Stringify` 去重

```js
const removeDuplicatesByJsonStringify = (arr) => {
    let map = new Map();
    arr.forEach(item => {
      map.set(JSON.stringify(item), item);
    });
    return [...map.values()];
  }

  console.log('通过JSON.stringify去重数组:', removeDuplicatesByJsonStringify([123, "meili", "123", "mogu", 123]));
  console.log('通过JSON.stringify去重数组:', removeDuplicatesByJsonStringify([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]));
  console.log('通过JSON.stringify去重数组:', removeDuplicatesByJsonStringify([123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]));
```

使用 `JSON.stringify` ，如果数组元素是 `object` 类型且里面键的顺序不同则会认为是两个不同放入数组元素：

```js
let o1 = {a:1, b:2}
let o2 = {b:2, a:1}
JSON.stringify(o1) // "{"a":1,"b":2}"
JSON.stringify(o2) // "{"b":2,"a":1}"
JSON.stringify(o1) === JSON.stringify(o2) // false
```

那么怎么解决呢，可以使用以下的解决方案思路：

#### 类型判断、遍历、比较、去重

一个数组（包含对象等类型元素）去重函数，需要在基础类型判断相等条件下满足以下条件：

- 如果元素是数组类型，则需要数组中的每一项相等
- 如果元素是对象类型，则需要对象中的每个键值对相等

去重本身就是遍历数组，然后比较数组中的每一项是否相等而已，所以关键步骤有两步：**比较、去重**

**比较：**

- 首先判断类型是否一致，类型不一致则返回认为两个数组元素是不同的，否则继续
- 如果是数组类型，则递归比较数组中的每个元素是否相等
- 如果是对象类型，则递归比较对象中的每个键值对是否相等
- 否则，直接 `===` 比较

**去重：**

- 采用 `reduce` 去重，初始 `accumulator` 为 `[]`
- 采用 `findIndex` 找到 `accumulator` 是否包含相同元素，如果不包含则加入，否则不加入
- 返回最终的 `accumulator` ，则为去重后的数组

```js
const getType = (obj) => {
    const classType = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regexp',
      '[object Object]': 'object',
      '[object Error]': 'error',
      '[object Symbol]': 'symbol',
    };

    if (obj === null) {
      return obj + '';
    }
    const type = Object.prototype.toString.call(obj);
    return classType[type];
  }

  const isEqual = (element1, element2) => {
    const type1 = getType(element1);
    const type2 = getType(element2);

    if (type1 !== type2) {
      return false;
    }

    if (type1 == 'array') {
      // 判断数组包含的元素个数是否相等
      if (element1.length !== element2.length) {
        return false;
      }
      // 比较两个数组中的每个元素
      return element1.every((item, index) => {
        return isEqual(item, element2[index]);
      })
    }

    if (type1 == 'object') {
      // 获取对象的键值
      const keys1 = Object.keys(element1);
      const keys2 = Object.keys(element2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keys1.every(item => {
        return isEqual(element1[item], element2[item]);
      })
    }

    return element1 === element2;
  }

  const removeDuplicates = (arr) => {
    return arr.reduce((accumulator, current) => {
      const hasIndex = accumulator.findIndex(item => isEqual(current, item));
      if (hasIndex === -1) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
  }

  const newArr = [123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili", {a:1, b:2}, {b:2, a:1}];
  console.log('含有对象类型的数组去重：', removeDuplicates(newArr)); // [123, {a: 1}, a: {b: 1}, {a: "1"}, "meili", {a: 1, b: 2}]
```

### 3、[实现一个`findIndex` 函数【字节、腾讯、网易、美团】](https://github.com/sisterAn/JavaScript-Algorithms/issues/137)
找到有序数组 [1, 2, 3, 4, 7, 7, 7, 9, 12, 23, 34, 45, 55, 67]中第一次出现的位置，比如7第一次出现的位置是4.
```js
const findIndex = (nums, target) => {
    let result = search(nums, target);
    return result;
}

const search = (nums, target) => {
    if (nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    if (left === nums.length || nums[left] !== target) {
        return -1;
    }

    return left;
}

const nums = [5,7,7,8,8,10], target = 8;
const nums1 = [1, 2, 3, 4, 7, 7, 7, 9, 12, 23, 34, 45, 55, 67], target1 = 9;
console.log('在排序数组中查找目标元素的第一个位置：', findIndex(nums, target));
console.log('在排序数组中查找目标元素的第一个位置：', findIndex(nums1, target1));
```
如果是要查找目标值的区间呢？题目如下：[leetcode34-在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
给定一个按照升序排列的整数数组 nums ，和一个目标值 target 。找出给定目标值在数组中的开始位置和结束位置。
你的算法时间复杂度必须是 O(logn) 级别。
如果数组中不存在目标值，返回 [-1, -1] 。

```js
const searchRange = (nums, target) => {
    const left = searchLeft(nums, target);
    if (left === -1) {
        return [-1, -1];
    }
    return [left, searchRight(nums, target)];
}

const searchLeft = (nums, target) => {
    if (nums.length === 0) {
        return - 1;
    }

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    if (left === nums.length || nums[left] !== target) {
        return -1;
    }
    return left;
}

const searchRight = (nums, target) => {
    if (nums.length === 0) {
        return -1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            left = middle + 1;
        }
    }

    if (right === -1 || nums[right] !== target) {
        return -1;
    }

    return right;
}

const nums = [5,7,7,8,8,10], target = 8;
const nums1 = [1, 2, 3, 4, 7, 7, 7, 9, 12, 23, 34, 45, 55, 67], target1 = 9;
console.log('在排序数组中查找目标元素的第一个位置：', searchRange(nums, target));
console.log('在排序数组中查找目标元素的第一个位置：', searchRange(nums1, target1));
```

### 4、[模拟实现 `Array.prototype.splice` 【字节】](https://github.com/sisterAn/JavaScript-Algorithms/issues/138)

### 5、[实现一个 `add` 方法](https://github.com/sisterAn/JavaScript-Algorithms/issues/103)
例如如下示例：
```js
add(1)(2,3)(4).value() // 10
```
考验闭包，实现如下：
```js
const add = (...args) => {
    const _add = (...newArgs) => {
        return add(...args, ...newArgs);
    }

    _add.value = () => args.reduce((previousValue, currentValue) => previousValue + currentValue);

    return _add;
}

console.log(add(1)(2,3)(4).value());
```