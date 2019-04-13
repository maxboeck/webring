const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('css', function() {
    return gulp
        .src('./src/assets/styles/*.scss')
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./dist/assets/styles'))
})
