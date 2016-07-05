var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('scripts', function() {
    gulp.src('./js/*.js').
    pipe(uglify({ mangle: false })).pipe(gulp.dest('./images/'));
});


gulp.task('watcher', function () {
    gulp.watch('./public/src/js/*.js', ['scripts']);
});