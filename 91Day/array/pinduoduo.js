// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }
//
// let counter = makeCounter();
//
// console.log(counter());
// console.log(counter());
//
// let counter2 = makeCounter();
//
// console.log(counter2());
// console.log(counter2());

function User(name) {
    this.name = name;
}

User.prototype.printName = function () {
    console.log(this.name);
}

let user = new User("john");
user.printName(); // ?

setTimeout(user.printName, 1000);