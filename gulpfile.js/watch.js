const { watch, series } = require('gulp')

const { js } = require('./javascript')
const { less } = require('./less')
const { copy } = require('./copy')
const { html } = require('./html')
const { images } = require('./images')

function watchDir(cb) {
    watch('./src/js/**/*.js', series(js))
    watch('./src/css/**/*.less', series(less))
    watch('./src/plugin/**/*', series(copy))
    watch('./src/images/**/*.{png,jpg,jpeg,ico,gif,svg}', series(images))
    watch('./src/html/**/*.html', series(html))
    cb()
}

exports.watch = watchDir