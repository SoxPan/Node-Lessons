/**
 * Created by User on 6/14/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('hello', function() {
    console.log('Hello George');
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('js/*.js'),
            uglify(),
            gulp.dest('js')
        ],
        cb
    );
});