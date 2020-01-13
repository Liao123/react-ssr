// 公共的方法 
const path = require('path');

exports.resolve = (...arg) => path.join(__dirname, '..', ...arg);