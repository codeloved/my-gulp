/**
 * 注意task中,src和dest中的目录,都是以gulpfile.js为相对目录的,不是以当前任务的实际问价目录
 */
const { series } = require('gulp')

// 导入task
const { copy } = require('./copy.js')

exports.dev = series(copy)