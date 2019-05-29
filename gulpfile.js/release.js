const { src, dest, series } = require('gulp')

const plumber = require('gulp-plumber')
const zip = require('gulp-zip')
const del = require('del')

function delDir(cb) {
  return del([
      './release/'
  ], cb)
}

function release() {
  // 拿到dist下所有文件及其子目录下文件
  return src('./dist/**/*')
  .pipe(plumber())
  .pipe(zip('dist.zip'))
  .pipe(dest('./release/'))
}

exports.release = series(delDir, release)