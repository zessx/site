// Gulp
const gulp = require('gulp');

// Debug plugins
const plumber      = require("gulp-plumber");

// Other plugins
const concat       = require('gulp-concat');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');
const gzip         = require('gulp-gzip');

// Paths
const vendor = 'node_modules/';
const source = 'assets/';
const dest   = 'public/';

// Prod
gulp.task('default', ['css', 'js']);

// Watch (dev)
gulp.task('watch', function () {
  gulp.watch(source + 'css/**/*.scss', ['css']);
  gulp.watch(source + 'js/**/*.js', ['js']);
});

// CSS
gulp.task('css', function() {
  return gulp.src([
      source + 'css/main.scss'
    ])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%', 'Explorer 7', 'Android >= 2', 'Safari > 3'],
    }))
    .pipe(cssnano())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dest));
});

// JS
gulp.task('js', function() {
  return gulp.src([
      vendor + 'paper/dist/paper-full.js',
      source + 'js/background.js',
      source + 'js/main.js'
    ])
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest(dest));
});
