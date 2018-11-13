var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
//var gutil = require('gulp-util');
//var minifyJS = require('gulp-minify');

// Core CSS
gulp.task('css', function() {
  return gulp.src([
    'assets/css/src/**/*.scss'
    ])
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/dist'))
    .pipe(rename('style.min.scss'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css/dist'))
});

// JS
//gulp.task('js', function() {
  //gulp.src([
    //'custom/components/**/*.js'
    //])
    //.pipe(concat('script.min.js'))
    //.pipe(minifyJS())
    //.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    //.pipe(gulp.dest('custom/cache/assets/js'))
//});

// Default
gulp.task('default', function() {
    gulp.watch('assets/css/src/**/*.scss', ['css']);
    //gulp.watch('custom/components/**/*.js',   ['js' ]);
});