const path = require('path')

// //1.獲取路徑信息
// const filepath = '/User/why/abc.txt'

// console.log(path.dirname(filepath)) //路徑名
// console.log(path.basename(filepath)) //文檔名
// console.log(path.extname(filepath)) //後墜名

//1.join路徑拼接
// const basepath = '../User/why'
// const fileanme = '/abc.txt'
// const othername = '/why.js'

// const filepat = path.join(basepath, fileanme)

// console.log(filepat)

// //resolve會自動判斷是否有./ ../開頭的路徑
// const filepat2 = path.resolve(basepath, fileanme, othername)
// console.log(filepat2)


const basepath2 = 'C:/User/renny'
// const filename2 = 'why/abc.txt' //C:\User\renny\why\abc.txt
// const filename2 = './why/abc.txt' //C:\User\renny\why\abc.txt
const filename2 = '../why/abc.txt' //C:\User\why\abc.txt

const result = path.resolve(basepath2, filename2)
console.log(result)