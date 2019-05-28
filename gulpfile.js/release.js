const { src, dest } = require('gulp')

const pulmber = require('gulp-plumber')
const zip = require('gulp-zip')

function release(cb) {
  // 拿到dist下所有文件及其子目录下文件
  src('./dist/**/*')
  .pipe(pulmber())
  .pipe(zip('dist.zip'))
  .pipe(dest('./release/'))
  cb()
}

exports.release = release