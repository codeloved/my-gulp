// 判定当前环境
const minimist = require('minimist')
var knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'development' }
  }
var options = minimist(process.argv.slice(2), knownOptions)
exports.options = options
