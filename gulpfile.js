var gulp = require('gulp');
var seq = require('gulp-sequence');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');
var server = require('gulp-webserver');

gulp.task('default', seq('clean', 'build', 'bundle'));

gulp.task('clean', function () {
  return gulp.src(['build'])
      .pipe(clean(['build']));
});

gulp.task('build', function () {
  return gulp.src(['src/*/*'])
      .pipe(babel())
      .pipe(gulp.dest('build'));
});

gulp.task('bundle', function () {
  return gulp.src(['build/*/*'])
      .pipe(webpack({
        module: {
          loaders: [
            {test: /(\.css$|\.styl$)/, loader: 'style!css!stylus'}
          ]
        },
        output: {
          filename: 'bundle.js'
        }
      }))
      .pipe(gulp.dest('build'));
});

gulp.task('hotload', function() {
  gulp.watch(['src/*/*', 'styles/*'], ['default'])
});

gulp.task('server', function () {
  gulp.src('.')
      .pipe(server({
        livereload: true,
        open: true
      }));
});