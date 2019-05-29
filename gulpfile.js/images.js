const { src, dest } = require('gulp')

const plumber = require('gulp-plumber')

function images() {
  return src('./src/images/**/*.{png,jpg,jpeg,ico,gif,svg}')
  .pipe(plumber())
  .pipe(dest('./dist/images/'))
}

exports.images = images
