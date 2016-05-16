'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    gulp.src('./styles/dev/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./styles/dist/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function() {
        gulp.watch('./styles/dev/**/*.scss', ['sass']);
        // Reloads the browser whenever HTML or JS files change
        gulp.watch('./*.html', browserSync.reload);
        gulp.watch('./js/dev/*.js', browserSync.reload);
});
