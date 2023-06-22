const gulp = require('gulp');
const copy = require('gulp-copy');

gulp.task('copy-assets', () => {
  return gulp.src(['css/**/*', 'js/**/*'])
    .pipe(copy('dist', { prefix: 1 }));
});

gulp.task('default', gulp.series('copy-assets'));
