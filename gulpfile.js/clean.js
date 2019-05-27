const { src } = require('gulp')
const plumber = require('gulp-plumber')
const del = require('del')
// 删除文件
// const clean = require('gulp-clean')

// function cleanDir(cb) {
//     // 取得dist/*下所有文件
//     // 会返回所有的文件和文件夹,如果写成./dist/**/*.js只会删除文件,不会删除子文件夹
      //src目录为./dist/*,需要执行两次，src目录为./dist/**/*需要执行子文件次数，可能不兼容gulp v4了，推荐使用的del
//     src('./dist/**/*')
//     .pipe(plumber())
//     .pipe(clean())
//     cb()
// }

function cleanDir(cb) {
    return del([
        './dist/'
    ], cb)
}

exports.clean = cleanDir