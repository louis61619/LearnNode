const name = "why";
const age = 18;
const sayHello = function(name) {
  console.log("你好" + name)
}

//導出的三種方式

//1.方式一:

// export const name = "why";
// export const age = 18;
// export const sayHello = function(name) {
//   console.log("你好" + name)
// }

//2.方式二:
//{}內放入欲導出的引用列表
export {
  name,
  age,
  sayHello
}

//3.方式三 //起別名
// export {
//   name as fname,
//   age as fage,
//   sayHello as fsayHello,
// }

export default function() {
  console.log("測試")
}