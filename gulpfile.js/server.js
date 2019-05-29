
const { watch, series } = require('gulp')
// const browserSync = require('browser-sync').create()
// const reload = browserSync.reload

// http://localhost:3000/js/index.js,通过具体的文件地址,访问文件, 热更新无效
// function server(cb) {
  // browserSync.init({
  //   server: {
  //     baseDir: './dist',
  //   }
  // });
  // 测试后: 此方式只能监听src中手动改的文件变化,并且只能监听一次,不能监听dist变化
  // watch('./dist/**/*', series(reload))
  // cb()
// }

const connect = require('gulp-connect')

// livereload 热更新无效
function server(cb) {
  return connect.server({
    root: 'dist',
    livereload: true,
    port: 3005,
    name: 'dev server'
  })
}

exports.server = server