const gulp = require('gulp')
const webpack = require('webpack-stream')

const webpackConfig = {
    mode: 'production',
    entry: {
        map: './src/assets/scripts/map.js'
    },
    output: {
        filename: '[name].js'
    }
}

gulp.task('scripts', function() {
    return gulp
        .src('src/assets/scripts/map.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/assets/scripts'))
})
