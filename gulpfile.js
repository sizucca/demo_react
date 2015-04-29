var path = require('path');
var gulp = require('gulp');
var sequence = require('gulp-sequence');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack-build');
var server = require('gulp-webserver');

var dest = 'build',
    WPCONFIG_FILENAME = 'webpack.config.js',
    wpConfig = {
      useMemoryFs: true,
      progress: true
    },
    wpOptions = {
      devtool: '#source-map'
    },
    wpFormat = {
      version: true,
      timings: true
    };

gulp.task('default', function (callback) {
  sequence('clean', 'build')(callback);
});

gulp.task('clean', function () {
  return gulp.src(['build'])
      .pipe(clean());
});

gulp.task('build', function () {
  gulp.src(WPCONFIG_FILENAME)
      .pipe(webpack.configure(wpConfig))
      .pipe(webpack.overrides(wpOptions))
      .pipe(webpack.compile())
      .pipe(webpack.format(wpFormat))
      .pipe(webpack.failAfter({
        errors: true,
        warnings: true
      }))
      .pipe(gulp.dest(dest));
});

gulp.task('hotload', function() {
  gulp.watch(['src/*/*', 'styles/*']).on('change', function(event) {
    if (event.type === 'changed') {
      gulp.src(WPCONFIG_FILENAME)
          .pipe(webpack.configure(wpConfig))
          .pipe(webpack.overrides(wpOptions))
          .pipe(webpack.watch(function(err, stats) {
            gulp.src(this.path, { base: this.base })
                .pipe(webpack.proxy(err, stats))
                .pipe(webpack.format(wpFormat))
                .pipe(gulp.dest(dest));
          }));
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

