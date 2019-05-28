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
// 给文件名增加MD5
const rev = require('gulp-rev')

function lessCss(cb) {
    src('./src/css/**/*.less', options.env === 'production' ? null : { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulpif(options.env === 'production', minifycss()))
    .pipe(rev())
    .pipe(dest('./dist/css/', options.env === 'production' ? null : { sourcemaps: '.' }))
    .pipe(rev.manifest()) // 生成rev-manifest.json文件
    .pipe(dest('./dist/'))
    // .pipe(connect.reload())
    cb()
}

exports.less = lessCss
