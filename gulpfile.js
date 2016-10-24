var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');

var SRC_DIR = './src';
var DIS_DIR = './dist';

//压缩js
gulp.task('miniJs', function () {
  return gulp.src(SRC_DIR + '/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(DIS_DIR + '/js'));
});
//压缩css
gulp.task('miniCss', function () {
  return gulp.src(SRC_DIR + '/style/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest(DIS_DIR + '/styles'))
});
//压缩img
gulp.task('miniImg', function () {
  return gulp.src(SRC_DIR + '/images/*.*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(DIS_DIR + '/images'));
});

gulp.task('zip', function (done) {
  runSequence([ 'miniJs', 'miniCss', 'miniImg' ], done);
});






