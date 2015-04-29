var gulp = require('gulp');
var sequence= require('gulp-sequence');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');
var server = require('gulp-webserver');

gulp.task('default', function(callback) {
  sequence('clean', 'build')(callback);
});

gulp.task('clean', function () {
  return gulp.src(['build'])
      .pipe(clean());
});

gulp.task('build', function () {
  gulp.src(['src/*/*'])
      .pipe(webpack({
        entry: './src/main/entry.js',
        module: {
          loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /(\.js$|\.jsx$)/, loader: 'babel'}
          ]
        },
        output: {
          filename: 'bundle.js'
        },
        devtool: 'source-map'
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