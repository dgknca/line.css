var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')

var path = {
  scss: { source: './scss/main.scss', target: './docs/public/css' }
}

var listen = './scss/**/**.scss'

gulp.task('scss', function() {
  gulp
    .src(path.scss.source)
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest(path.scss.target))
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(path.scss.target))
})

gulp.task('watch', function() {
  gulp.watch(listen, ['scss'])
})

gulp.task('default', ['scss', 'watch'])
