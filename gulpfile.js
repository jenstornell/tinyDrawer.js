let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let concat = require("gulp-concat");
let uglify = require('gulp-uglify-es').default;
let csso = require('gulp-csso');
let rename = require('gulp-rename');

var paths = {
    styles: {
        src: "assets/css/src/**/*.scss",
        dest: "assets/css/dist"
},
    scripts: {
        src: "assets/js/src/**/*.js",
        dest: "assets/js/dist"
    }
};

function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(concat('tinyDrawer.scss'))
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(autoprefixer())
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(csso())
            .pipe(rename({extname: '.min.css'}))
            .pipe(gulp.dest(paths.styles.dest))
    );
}

function script() {
    return (
        gulp
            .src(paths.scripts.src)
            .pipe(concat('tinyDrawer.js'))
            .pipe(gulp.dest(paths.scripts.dest))
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(gulp.dest(paths.scripts.dest))
    );
}

function watch(){
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.scripts.src, script);
}

exports.style = style;
exports.script = script;
exports.watch = watch;