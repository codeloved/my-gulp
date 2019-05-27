var gulp = require('gulp')
// 将less转换为css
var less = require('gulp-less')
// 自动补全css前缀
var autoprefixer = require('gulp-autoprefixer')
// 压缩css
var minifycss = require('gulp-minify-css')
// 压缩js(v4不兼容?)
var uglify = require('gulp-uglify')
//错误处理插件
var plumber = require('gulp-plumber')
//删除文件
var clean = require('gulp-clean')

// 注意,此文件夹使用的是require-dir导出的,相当于写在gulpfile.js中,目录就是gulpfile.js相对的路径,不能用此文件夹相对的路径
// sourcemaps 编译后代码和源码的对应,方便调试
gulp.task('less', function(cb) {
  gulp.src('./src/css/*.less', { sourcemaps: true })
  .pipe(plumber())
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(minifycss())
  .pipe(gulp.dest('./dist/css/', { sourcemaps: '.' }))
  cb()
})

gulp.task('js', function(cb) {
  // **/*.js会拿到js下面的所有js文件,包括js文件对应的子文件夹也会保留
  gulp.src('./src/js/**/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
  cb()
})

gulp.task('copy', function(cb) {
  // plugin目录及其子目录下所有文件,只copy
  gulp.src('./src/plugin/**/*')
  .pipe(gulp.dest('./dist/plugin/'))
  cb()
})

gulp.task('clean', function(cb) {
  // 取得dist/*下所有文件
  // 会返回所有的文件和文件夹,如果写成./dist/**/*.js只会删除文件,不会删除子文件夹
  gulp.src('./dist/*')
  .pipe(plumber())
  .pipe(clean())
  cb()
})

gulp.task('watch', function(cb) {
  gulp.watch('./src/js/**/*.js', gulp.series('js'))
  cb()
})

// gulp.task('build', ['less', 'js'], function(cb){
//   cb()
// })

