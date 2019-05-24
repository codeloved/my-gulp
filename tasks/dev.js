var gulp = require('gulp')
// 将less转换为css
var less = require('gulp-less')
// 自动补全css前缀
var autoprefixer = require('gulp-autoprefixer')
// 压缩css
var minifycss = require('gulp-minify-css')
// 压缩js(v4不兼容?)
var uglify = require('gulp-uglify')

// 注意,此文件夹使用的是require-dir导出的,相当于写在gulpfile.js中,目录就是gulpfile.js相对的路径,不能用此文件夹相对的路径
gulp.task('less', function(cb) {
  gulp.src('./src/css/*.less')
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(minifycss())
  .pipe(gulp.dest('./dist/css/'))
  cb()
})

gulp.task('js', function(cb){
  gulp.src('./src/js/*.js')
  // .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
  cb()
})

// gulp.task('build', ['less', 'js'], function(cb){
//   cb()
// })

