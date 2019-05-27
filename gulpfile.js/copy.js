const { src, dest } = require('gulp')

function copy(cb) {
  // 注意目录,是以文件夹为目录的,和直接在gulpfile.js问价写是一个文件层级,而不是此配置文件的实际目录为层级推论
  src('./src/plugin/**/*')
  .pipe(dest('./dist/plugin/'))
  cb()
}

exports.copy = copy

