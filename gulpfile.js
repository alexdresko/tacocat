var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('build', function() {
  gulp.src('**/*-dev.*')
  .pipe(rename(function (path) {
    path.basename = path.basename.replace(/-dev/, '');
  }))
  .pipe(gulp.dest(''));
});