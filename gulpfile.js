'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');

gulp.task('sass-compile', function() {
    return gulp.src('./app/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(livereload());
});

gulp.task('js-compile', function() {
    return gulp.src('./app/ES6/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./app/js'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./app/sass/*.sass', ['sass-compile']);
    gulp.watch('./app/ES6/*.js', ['js-compile']);
});

gulp.task('serve', ['sass-compile', 'js-compile', 'watch']);
