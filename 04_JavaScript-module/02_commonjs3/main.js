
//加載過程是同步
//模塊被引入多次的時候，最終只會執行一次

require('./bar');
require('./foo')

console.log("main中的代碼被執行")