const gulp = require('gulp')

require('require-dir')('./_tasks')

gulp.task('build', gulp.series('clean', 'styles', 'scripts'))
gulp.task('build:dev', gulp.series('build', 'watch'))
