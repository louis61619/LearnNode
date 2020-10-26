const EventEmmitter = require("events");

//1.創建發射器
const emitter = new EventEmmitter();

//2.監聽某一個事件
//on: 
//addListener:
//on 和 addListener 互為別名
emitter.on('click', (args) => {
  console.log("監聽1到click事件", args)
})

const listener2 = (args) => {
  console.log("監聽2到click事件", args)
}

emitter.on('click', listener2)

emitter.on('tap', (args) => {
  console.log(args)
})

//3.獲取註冊的事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount("click"))
console.log(emitter.listeners("click"))