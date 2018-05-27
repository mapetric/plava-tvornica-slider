'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');

gulp.task('sass-compile', function() {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
        .pipe(livereload());
});

gulp.task('js-compile', function() {
    return gulp.src('./src/ES6/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./src/js'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/sass/*.sass', ['sass-compile']);
    gulp.watch('./src/ES6/*.js', ['js-compile']);
});

gulp.task('serve', ['sass-compile', 'js-compile', 'watch']);
