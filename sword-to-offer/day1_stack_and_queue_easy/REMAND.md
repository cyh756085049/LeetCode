### 箭头函数知识点
1. 箭头函数不存在自己的this，只会从自己的作用链的上一层继承this
2. 箭头函数不能用作构造函数，和 new 一起会抛出错误
    ```js
      const Queue = () => {};
      const queue = new Queue(); // TypeError: Queue is not a constructor
    ```
3. 箭头函数没有 prototype 属性
    ```js
      const Test = () => {}
      console.log(Test.prototype); // undefined
      // TypeError: Cannot set properties of undefined (setting 'appendTail')
      Test.prototype.appendTail = function () {
      console.log('测试');
      }
    ```

