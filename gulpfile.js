var gulp = require('gulp');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');

gulp.task('minify', function () {
    gulp.src('src/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./dist/'));

    gulp.src('src/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});