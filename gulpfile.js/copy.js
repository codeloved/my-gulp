const { src, dest } = require('gulp')
// 错误处理插件
const plumber = require('gulp-plumber') 

function copy(cb) {
  src('./src/plugin/**/*')
  .pipe(plumber())
  .pipe(dest('./dist/plugin/'))
  cb()
}

exports.copy = copy

