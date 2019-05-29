const { src, dest } = require('gulp')
// 错误处理插件
const plumber = require('gulp-plumber') 

function copy() {
  return src('./src/plugin/**/*')
  .pipe(plumber())
  .pipe(dest('./dist/plugin/'))
}

exports.copy = copy

