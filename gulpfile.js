//
// Build file.
//
var gulp = require('gulp');
var sass = require('gulp-sass');


// Compile sass.
gulp.task('sass', function () {
  gulp.src('./assets/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

// Move necessary bower component files into assets.
gulp.task('move_assets', function() {

    // Styles.
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/jquery-github/assets/base.css',
        'bower_components/jquery-github/assets/*.{ttf,woff,eof,svg}'
    ])
    .pipe(gulp.dest('assets/css/libs'));

    // Scripts.
    gulp.src([
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery-github/dist/jquery.github.min.js'
    ])
    .pipe(gulp.dest('assets/js/libs'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/*.sass', ['sass']);
});
