//常見的三種導入方式
//1.最常見
// import {name, age, sayHello} from './modules/foo.js'; //必須加上js後墜

//2.在導出變數之後可以起別名
// import {name as wname, age as wage, sayHello as wsayHello} from './modules/foo.js';

//3.通過 * as foo 統一放入對象
// import * as foo from "./modules/foo.js"

// console.log(foo.name)
// console.log(foo.age)
// foo.sayHello('XXXX')

//演練 export 和 import 結合
// import {name, age, sayHello} from "./modules/bar.js"
// console.log(name)
// console.log(age)
// console.log(sayHel lo)

//演練: default export 如何導入
import foo from "./modules/foo.js"

foo()

//演練: import函數
let flag = true;

if(flag) {
  //require 的本質是一個函數
  //import 在解析階段就運行，部會到函數的運行階段

  //執行函數
  //返回Promise
  //腳手架 -> import() 單獨打包
  
  let a = './modules/foo.js'
  
  import(a).then(res => {
    console.log("在then中打印")
    console.log(res.age)
    console.log(res.name)
  }).catch(err => {

  })

}