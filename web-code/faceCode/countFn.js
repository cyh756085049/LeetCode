/**
 * 老虎集团：
 * 实现奇数次调用时，打印1，偶数次调用时打印2
 * es6实现？iterator？generator？
 */
// 方法1
function countFn() {
    countFn.count = countFn.count ? countFn.count + 1 : 1;
    if (countFn.count % 2 === 0) {
        console.log(2);
    } else {
        console.log(1);
    }
}

countFn(); // 1
countFn(); // 2
countFn(); // 1
countFn(); // 2

// 方法2
const fn = () => {
    (fn.count & 1) === 0 ? console.log(2) : console.log(1);
    fn.count++;
}
fn.count = 1;
console.log('---------------');
fn();
fn();
fn();
fn();

// 方法3
const A = (function countFn() {
    let index = 1;
    function f() {
        if (index % 2 === 1) {
            console.log(1);
        } else {
            console.log(2);
        }
        index++;
    }
    return f;
})();

console.log('-----------------');
A();
A();

if(! "a" in window){
    var a = 1;
}
console.log(a); // undefined

if(!("a" in window)){
    var a = 1; //
    // a = 1; //
}

