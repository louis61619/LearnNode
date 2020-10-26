const fs = require('fs')

//案例: 讀取文件的信息

const filepath = "./abc.txt"

//方式一: 同步操作
// const info = fs.statSync(filepath)
// console.log("後續需要執行的代碼")
// console.log(info)

//方式二: 異步操作
// fs.stat(filepath, (err, info) => {
//   if(err) {
//     console.log(err)
//     return;
//   }
//   console.log(info)
// })

// console.log("後續要執行的代碼")

//方式三: Promise
fs.promises.stat(filepath).then(info => {
  console.log(info)
  console.log(info.isFile()); //判斷是否為文件
  console.log(info.isDirectory());//判斷是否為文件夾
}).catch(err => {
  console.log(err)
})

console.log("後續要執行的代碼")