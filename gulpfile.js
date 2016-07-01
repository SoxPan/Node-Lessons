/**
 * Created by User on 6/14/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('hello', function() {
    console.log('Hello George');
});

gulp.task('scripts', function() {
    return gulp.src('./js/ng/*.js')
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function(){
    gulp.watch('./js/*.js', ['scripts']);
});

