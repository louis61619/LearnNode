define(function() {
  const name = "Renny";
  const age = 18;
  const sayHello = function(name) {
    console.log("你好" + name)
  }

  return {
    name: name,
    age,
    sayHello
  }
})