const { dir } = require('console');
const fs = require('fs');
const path = require('path')

//1.創建文件夾
const dirname = './why'

//如果文件不存在
if(!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err)
  })
}

//2.讀取文件夾中的所有文件
// fs.readdir(dirname, (err, files) => {
//   console.log(files)
// })

function getFiles(dirname) {
  fs.readdir(dirname, {withFileTypes: true}, (err, files) => {
    for(let file of files) {
      if(file.isDirectory()) { //判斷是否為文件夾
        // console.log(file.name)
        const filepath = path.resolve(dirname, file.name) //如為文件夾拼接路徑
        getFiles(filepath) //遞迴調用
      }else {
        console.log(file.name)
      }
    }
  })
}

getFiles(dirname)

//3.文件夾的重命名

// fs.rename("./why", "./kobe", (err) => {
//   console.log(err)
// })