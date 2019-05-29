const { src, dest, parallel } = require('gulp')
const plumber = require('gulp-plumber')
const rev = require('gulp-rev')
const rename = require('gulp-rename')

function revMd5() {
  return src(['dist/js/**/*.js', 'dist/css/**/*.css'], { base: 'dist' })
  .pipe(plumber())
  .pipe(rev())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest('dist'))
  .pipe(rev.manifest('md5-map.json'))
  .pipe(dest('dist'))
}

exports.rev = revMd5