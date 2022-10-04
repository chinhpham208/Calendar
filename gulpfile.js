const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile scss into css
function styles(){
    // 1. where is my scss file
    return gulp.src('./**/*.scss')
    // 2. pass that file through SASS compiler
    .pipe(sass().on('error',sass.logError))
    // 3. where to save the compiler CSS;
    .pipe(gulp.dest('./css'))
    // 4. Stream changes to all browser
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./**/*.scss',styles);
    gulp.watch('./**/*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}
exports.styles = styles;
exports.watch = watch;