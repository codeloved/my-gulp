const { series } = require('gulp')

var { copy } = require('./copy.js')

exports.dev = series(copy)