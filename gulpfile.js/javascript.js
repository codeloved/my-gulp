const { src, dest } = require('gulp')
const plumber = require('gulp-plumber') 
// 压缩js
const uglify = require('gulp-uglify')
const { options } = require('./env')
// 区分环境
const gulpif = require('gulp-if')
// 将es6/7->es5
const babel = require('gulp-babel')
// 给文件名增加MD5
const rev = require('gulp-rev')

function js(cb) {
    src('./src/js/**/*.js', options.env === 'production' ? null: { sourcemaps: true })
    .pipe(plumber())
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulpif(options.env === 'production', uglify()))
    .pipe(rev())
    .pipe(dest('./dist/js/', options.env === 'production' ? null : { sourcemaps: '.' }))
    .pipe(rev.manifest()) // 生成rev-manifest.json文件
    .pipe(dest('./dist/')) // 输出json文件
    cb()
}

exports.js = js