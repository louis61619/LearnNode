/**
 * Node中實現CommonJS的本質就是對象引用賦值
 */

//bar=exports

const bar = require('./bar')

console.log(bar.name)
console.log(bar.age)
bar.sayHello("Kobe")

setTimeout(() => {
  console.log(bar.name)
}, 2000)

// setTimeout(() => {
//   bar.name = "哈哈哈"
// }, 1000)

// const {name, age, sayHello} = require('./bar')

// console.log(name)
// console.log(age)
// sayHello("Kobe")

// setTimeout(() => { //解構之後原物件改變的變數不會影響
//   console.log(name)
// }, 2000)