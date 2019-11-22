const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('processHTML', done => {
  done();
  gulp.src('*.html').pipe(gulp.dest('dist'));
});
gulp.task('processIMG', done => {
  done();
  gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'));
});

gulp.task('processJS', done => {
  done();
  gulp
    .src('*.js')
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('babelPolyfill', done => {
  done();
  gulp
    .src('node_modules/babel-polyfill/browser.js')
    .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: './dist',
    port: 8080,
    ui: {
      port: 8081
    }
  });
  // gulp.watch('*.js', ['processJS']);
  // gulp.watch('*.html', ['processHTML']);

  gulp.watch('dist/js/*.js').on('change', browserSync.reload);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task(
  'default',
  gulp.series(
    'processHTML',
    'processJS',
    'processIMG',
    'babelPolyfill',
    'browserSync',
    callback => {
      callback();
    }
  )
);
