const { watch, series } = require('gulp')

const { js } = require('./javascript')
const { less } = require('./less')
const { copy } = require('./copy')

function watchDir(cb) {
    watch('./src/js/**/*.js', series(js))
    watch('./src/css/**/*.less', series(less))
    watch('./src/plugin/**/*', series(copy))
    cb()
}

exports.watch = watchDir