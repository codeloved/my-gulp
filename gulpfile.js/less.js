const { src, dest } = require('gulp')

const plumber = require('gulp-plumber')
// 将less转换为css
const less = require('gulp-less')
// 自动补全css前缀
const autoprefixer = require('gulp-autoprefixer')
// 压缩css
const minifycss = require('gulp-minify-css')
// 区分环境
const gulpif = require('gulp-if')
const { options } = require('./env')

// const connect = require('gulp-connect')

function lessCss() {
    return src('./src/css/**/*.less', options.env === 'production' ? null : { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulpif(options.env === 'production', minifycss()))
    .pipe(dest('./dist/css/', options.env === 'production' ? null : { sourcemaps: '.' }))
    // .pipe(connect.reload())
}

exports.less = lessCss
