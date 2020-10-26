//常見的三種導入方式
//1.最常見
import {name, age, sayHello} from './modules/foo.js'; //必須加上js後墜


console.log(name)
console.log(age)
sayHello('XXXX')


// setTimeout(() => {
//   console.log(name)
// }, 2000)

setTimeout(() => { //改件是通過內存地址引用，所以可以被更改
  name.name = "bbbbb"
}, 1000)