const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-tinypng');
const browserSync = require('browser-sync').create();



function style() {
    return gulp.src('./src/style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.stream());
}

function minimg() {
    return gulp.src('./src/img/*')
        .pipe(imagemin('MSpvV5bZTFm2WspqpS05O88MALjksI22'))
        .pipe(gulp.dest('dest/img'))
        .pipe(browserSync.stream())
}

function script() {
    return gulp.src('./src/js/main.js')
        .pipe(browserSync.stream())
}

function html() {
    return gulp.src('./index.html')
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/style/*.scss', style)
    gulp.watch('./src/js/*.js', script)
    gulp.watch('./*.html', html)
    gulp.watch('./src/img/*', minimg)
}

gulp.task('watch', watch)