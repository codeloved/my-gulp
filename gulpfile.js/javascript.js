const { src, dest } = require('gulp')
const plumber = require('gulp-plumber') 
// 压缩js
const uglify = require('gulp-uglify')
const { options } = require('./env')
// 区分环境
const gulpif = require('gulp-if')

function js(cb) {
    src('./src/js/**/*.js', options.env === 'production' ? null: { sourcemaps: true })
    .pipe(plumber())
    .pipe(gulpif(options.env === 'production', uglify()))
    .pipe(dest('./dist/js/', options.env === 'production' ? null : { sourcemaps: '.' }))
    cb()
}

exports.js = js