const fs = require('fs');

//1.文件寫入
// const content = "你好阿，李銀河"

// fs.writeFile('./abc.txt', content, {flag: "a"}, err => {
//   console.log(err)
// })

//2.文件讀取
fs.readFile("./abc.txt", {encoding: 'utf-8'}, (err, data) => {
  console.log(data)
})

//w打開文件寫入，默認
//w+打開文件進行讀寫，如果不存在則創建文件
//r+打開文件進行讀寫，如果不存在那麼拋出異常
//r打開文件進行讀取，讀取時的默認值
//a打開要寫入的文件，將流放在文件末尾。如果不存在則創建文件
//a+打開文件以進行讀寫，寫到末尾，如果不存在則創建