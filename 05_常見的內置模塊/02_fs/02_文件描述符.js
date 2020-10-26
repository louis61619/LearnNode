const fs= require('fs');

fs.open("./abc.txt", (err, fd) => {
  if(err) {
    console.log(err);
    return
  }
  console.log(fd)
  //通過文件描述符去獲取文件的信息
  fs.fstat(fd, (err, info) => {
    console.log(info)
  })
})