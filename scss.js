import gulp from "gulp";
import postcss from "gulp-postcss";
import sass from "gulp-sass";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

function styles() {
  return gulp.src("src/styles/**/*.scss") // Manzilni loyihangizga moslab o'zgartiring
    .pipe(sass())
    .pipe(postcss([
      tailwindcss(),
      autoprefixer()
    ]))
    .pipe(gulp.dest("dist/css"));
}

exports.default = gulp.series(styles);
