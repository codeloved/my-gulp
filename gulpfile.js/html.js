const { src, dest } = require('gulp')

const plumber = require('gulp-plumber')
// 压缩html
const minifyhtml = require('gulp-minify-html')
const gulpif = require('gulp-if')
const options = require('./env')

function html() {
  return src('./src/html/**/*.html')
  .pipe(plumber())
  .pipe(gulpif(options.env === 'production', minifyhtml()))
  .pipe(dest('./dist/html/'))
}

exports.html = html
