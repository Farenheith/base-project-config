var gulp = require('gulp');
var del = require('del');

gulp.task('clean:output', function () {
  return del([
    'js/'
  ]);
});

gulp.task('default', ['clean:output']);