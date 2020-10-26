let name = {name: "why"};
const age = 18;
const sayHello = function(name) {
  console.log("你好" + name)
}

// setTimeout(()=> {
//   name = "aaaaaa"
// },1000)

setTimeout(() => {
  console.log(name.name)
}, 2000)

export {
  name,
  age,
  sayHello
}
