/**
 * vue数据双向绑定的 监听器 Observer 实现
 * @type {string}
 */
// 初级版，通过字面量定义一个对象，给其设置属性和对应的属性值，然后感知该对象的属性被读取和修改
let val = 'tom';
let person = {};
Object.defineProperty(person, 'name', {
    get() {
        console.log('name属性被读取了。。。');
        return val;
    },
    set(newVal) {
        console.log('name属性被修改了。。。');
        val = newVal;
    }
})
console.log('-----------------对象的单个属性可被观测------------------');
console.log(person.name);
console.log(person.name = 'ramona');
console.log(person.name);


console.log('---------------封装函数，让对象的所有属性都可观测--------------------');
function observable(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach((key) => {
        defineReactive(obj, key, obj[key]);
    });
    return obj;
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`${key}属性被读取了。。。`);
            return val;
        },
        set(newVal) {
            console.log(`${key}属性被修改了。。。`);
            val = newVal;
        }
    })
}

let person1 = observable({
    name: 'ramona',
    age: 24
})
console.log(person1.name);
console.log(person1.name = 'raymond');
console.log(person1.age = 25)
console.log(person1.name);
console.log(person1.age);