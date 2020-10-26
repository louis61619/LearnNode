const path = require('path')

const basePath = '/User/why';
const filename = 'abc.txt'

const filePath = path.resolve(basePath, filename)

console.log(filePath)