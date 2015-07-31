//
// Build file.
//
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');


// Compile sass.
gulp.task('sass', function () {
  gulp.src('./assets/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./assets/css'));
});

// Move necessary bower components files into assets.
gulp.task('libraries', function() {

    // Libraries.
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/jquery-github/assets/base.css',
    ])
    .pipe(concat('libs.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('assets/css/libs'));

    // Fonts.
    gulp.src([
        'bower_components/jquery-github/assets/*.{ttf,woff,eof,svg}'
    ])
    .pipe(gulp.dest('assets/css/libs'));

    // Scripts.
    gulp.src([
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery-github/dist/jquery.github.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/libs'));
});

// Watch .sass files for changes.
gulp.task('watch', function () {
  gulp.watch('./assets/sass/*.sass', ['sass']);
});


// Default task.
gulp.task('default', ['sass', 'libraries', 'watch']);
