const { src, dest } = require('gulp')

function copy(cb) {
  src('./src/plugin/**/*')
  .pipe(dest('./dist/plugin/'))
  cb()
}

exports.copy = copy

