const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function () {

    browserSync.init({
        server: {
            port: 9000,
      baseDir: "build"
        }
    });

    gulp.watch("*build/**/*").on("change", reload);
});