const { src, dest } = require('gulp')
const plumber = require('gulp-plumber') 
// 压缩js
const uglify = require('gulp-uglify')
const { options } = require('./env')
// 区分环境
const gulpif = require('gulp-if')
// 将es6/7->es5
const babel = require('gulp-babel')

function js() {
    return src('./src/js/**/*.js', options.env === 'production' ? null: { sourcemaps: true })
    .pipe(plumber())
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulpif(options.env === 'production', uglify()))
    .pipe(dest('./dist/js/', options.env === 'production' ? null : { sourcemaps: '.' }))
}

exports.js = js