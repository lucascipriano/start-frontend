const gulp = require('gulp')
const autoPrefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')


gulp.task('sass', function () {
  return gulp
    .src('./app/scss/main.scss')
    .pipe(autoprefixer({overrideBrowserslist: ['last 2 versions'], cascade: false}))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'))
    .pipe(browserSync.stream());
});


gulp.task('concat_js', function alo(){
  return gulp.src('./app/js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.reload({
          stream: true
      }))

    .pipe(browserSync.stream());
})

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
    gulp.watch('./app/js/scripts/*.js',gulp.series(['concat_js']))
    gulp.watch(['./app/*.html']).on('change', browserSync.reload);
  })
);

gulp.task('default', gulp.parallel('sass', 'watch', 'browserSync', 'concat_js'));
