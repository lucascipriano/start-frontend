const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp
    .src('./app/scss/main.scss')
    .pipe(concat('minimal.css'))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
});

gulp.task(
  'watch',
  gulp.series(function () {
    gulp.watch(['./app/scss/*.scss'], gulp.parallel(['sass']));
    gulp.watch(['./app/*.html']).on('change', browserSync.reload);
  })
);

gulp.task('default', gulp.parallel('sass', 'watch', 'browserSync'));
