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
const { release } = require('./release')

exports.default = series(clean, parallel(js, less, copy, html, images), server, watch)
exports.build = series(clean, parallel(js, less, copy, html, images))
exports.release = series(release)
