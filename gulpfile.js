var path = require('path');
var gulp = require('gulp');
var sequence = require('gulp-sequence');
var clean = require('gulp-clean');
var webpack = require('webpack-stream');
var server = require('gulp-webserver');

var WPCONFIG_FILENAME = './webpack.config.js';

gulp.task('default', function (callback) {
  sequence('clean', 'build')(callback);
});

gulp.task('clean', function () {
  return gulp.src(['build'])
    .pipe(clean());
});

gulp.task('build', function () {
  return gulp.src('')
    .pipe(webpack(require(WPCONFIG_FILENAME)))
    .pipe(gulp.dest(''));
});

gulp.task('hotload', function () {
  gulp.watch(['src/**', 'styles/**']).on('change', function (event) {
    if (event.type === 'changed') {
      gulp.tasks.default.fn();
    }
  });
});

gulp.task('server', function () {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

