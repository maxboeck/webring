const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('styles', function() {
    return gulp
        .src('./src/assets/styles/*.scss')
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./src/assets/styles'))
})
