const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// HTML
const nunjucks = require('gulp-nunjucks');

const reload = browserSync.reload;

const dist = 'dist/buildcss';
const marked = require('marked');

const env = nunjucks.configure('src');

//
// Copy html test pages.
//
gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(dist));
});

//
// Copy html test pages.
//
gulp.task('files', () => {
  gulp.src('src/**/*.{js,css}')
    .pipe(gulp.dest(dist));
});


//
// Dev server
//
gulp.task('serve', ['files', 'html'], () => {
  browserSync.init({
    notify: true,
    port: 9000,
    open: true,
    server: {
      baseDir: ['dist']
    }
  });

  gulp.watch('src/**/*.*', ['files', reload]);
  gulp.watch('pages/**/*.html', ['html', reload]);
  gulp.watch('pages/**/*.scss', ['css', reload]);
});

gulp.task('default', ['serve']);
