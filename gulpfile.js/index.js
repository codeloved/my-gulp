/**
 * 注意task中,src和dest中的目录,都是以gulpfile.js为相对目录的,不是以当前任务的实际文件目录
 */
const { series, parallel } = require('gulp')

// 导入task
const { copy } = require('./copy')
const { clean } = require('./clean')
const { js } = require('./javascript')
const { less } = require('./less')
const { watch } = require('./watch')
const { html } = require('./html')
const { images } = require('./images')
const { server } = require('./server')
const { rev } = require('./rev')
const { release } = require('./release')

// 定义任务时,不能使用cb(),应该使用return,否则会series串行中,无法使用rev读取当前总任务前面任务生成的文件,出现莫名bug
// watch必须放在server前面,不然不生效, 观看cmd打印进程知道,server后的任务,不会执行

exports.default = series(clean, parallel(js, less, copy, html, images), watch, server)
exports.build = series(clean, parallel(js, less, copy, html, images), rev)
exports.release = series(release)
