const EventEmmitter = require("events");

//1.創建發射器
const emitter = new EventEmmitter();

//2.監聽某一個事件
//on: 
//addListener:
//on 和 addListener 互為別名
emitter.once('click', (arg1, arg2, arg3) => { //只執行一次
  // console.log(arguments)
  //箭頭函數不綁定this也不綁定arguments
  console.log("監聽1到click事件", arg1, arg2, arg3)
})

const listener2 = function (args) {
  //用有作用域的function綁定this
  console.log(arguments)
  console.log(this)
  console.log("監聽2到click事件", args)
}

emitter.on('click', listener2)

emitter.prependListener('click', (arg1, arg2, arg3) => { //將本次監聽放到最前面
  // console.log(arguments)
  console.log("監聽3到click事件", arg1, arg2, arg3)
})

emitter.on("scroll", (args) => {
  console.log("監聽到scroll方法")
})


setTimeout(() => {
  emitter.removeAllListeners("scroll"); //移除所有監聽 || 移除特定事件監聽
  emitter.emit("click", "coder", "renny", "louis")
  emitter.emit("click", "ooooo")
  emitter.emit("scroll", "白癡")
}, 2000)
