const baseDir = require('./bin/get-base-dir');
const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('default', function () {
	return gulp.src(`${baseDir}/coverage/coverage-final.json`)
		.pipe(rename('coverage.json'))
		.pipe(gulp.dest('.'));
});
