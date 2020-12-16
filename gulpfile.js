var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')

var path = {
  scss: { source: './scss/main.scss', target: './' }
}

var listen = './scss/**/**.scss'

gulp.task('scss', function() {
  gulp
    .src(path.scss.source)
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('line.css'))
    .pipe(gulp.dest(path.scss.target))
    .pipe(cleanCSS())
    .pipe(rename('line.min.css'))
    .pipe(gulp.dest(path.scss.target))
})

gulp.task('watch', function() {
  gulp.watch(listen, ['scss'])
})

gulp.task('default', ['scss', 'watch'])
