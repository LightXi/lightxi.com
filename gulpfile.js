const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');
const copy = require('gulp-copy');

gulp.task('minify-html', () => {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('assets/css/index.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('copy-assets', () => {
  return gulp.src(['assets/images/*'], { base: 'assets' })
    .pipe(copy('dist/assets', { prefix: 1 }));
});

gulp.task('copy-favicon', () => {
  return gulp.src('favicon.ico')
    .pipe(copy('dist', { prefix: 1 }));
});

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('default', gulp.series('minify-html', 'minify-css', 'copy-assets', 'copy-favicon'));
