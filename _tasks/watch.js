const gulp = require('gulp')
/*
  Watch folders for changess
*/
gulp.task('watch', function() {
    gulp.watch('src/assets/styles/**/*.scss', gulp.series('styles'))
    gulp.watch('src/assets/scripts/**/*.js', gulp.series('scripts'))
})
