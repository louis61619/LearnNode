// 每一個文檔就是一個模塊

var name = "Renny"
var age = 18

function sayHello(name) {
  console.log(name + '說你好')
}

const info = {
  name: 'coderwhy'
}

setTimeout(() => {
  info.name = "James"
}, 1000)

// setTimeout(() => {
//   console.log(exports.name)
// }, 2000)

exports.name = name
exports.age = age
exports.sayHello = sayHello

//本質上是module.exports在導出
module.exports = {
  name: info,
  age: 123,
  sayHello: function(name) {
    console.log("你好" + name)
  }
}

//exports和module.exports之間有甚麼關係呢?
// module.exports = {

// };