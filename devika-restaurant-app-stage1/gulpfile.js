var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();

gulp.task("styles", function(){
  return gulp.src("sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream());
});

gulp.task('default', function(){
  browserSync.init({server: './', port: 8000});
  gulp.watch("sass/**/*.scss", gulp.series('styles', ['styles']));
});
