var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var minifyJS = require('gulp-minify');

// Core CSS
gulp.task('css', function() {
  return gulp.src([
    'assets/css/src/core.scss',
    'assets/css/src/example.scss'
    ])
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/dist'))
    .pipe(rename('style.min.scss'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css/dist'))
});

// JS
gulp.task('js', function() {
  gulp.src([
    'assets/js/script.js'
    ])
    .pipe(minifyJS({
      ext:{
        min:'.min.js'
      },
    }))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest('assets/js'))
});

// Default
gulp.task('default', function() {
    gulp.watch('assets/css/src/**/*.scss', ['css']);
    gulp.watch('assets/js/script.js',   ['js' ]);
});