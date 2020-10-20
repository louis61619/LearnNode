// console.log(process)


// console.log(process.argv[2]);
// console.log(process.argv[3]);

// console.clear() //控制台清空

// process.argv.forEach(item => {
//   console.log(item)
// })

function foo() {
  bar()
}

function bar() {
  console.trace()
}

foo()