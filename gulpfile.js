var path = require('path');
var gulp = require('gulp');
var sequence = require('gulp-sequence');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack-build');
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
  return gulp.src(WPCONFIG_FILENAME)
      .pipe(webpack.init({progress: true, useMemoryFs: true}))
      .pipe(webpack.run())
      .pipe(webpack.format({version: true, timings: true}))
      .pipe(gulp.dest(''));
});

gulp.task('hotload', function () {
  gulp.watch(['src/**', 'styles/**']).on('change', function (event) {
    if (event.type === 'changed') {
      gulp.tasks.build.fn();
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
