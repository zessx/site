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
const rename       = require('gulp-rename');
const iconfont     = require('gulp-iconfont');
const consolidate	 = require('gulp-consolidate');
const babel        = require('gulp-babel');

// Paths
const source = 'assets/';
const dest   = 'public/';

// Prod
gulp.task('default', ['icons', 'css', 'js']);

// Watch (dev)
gulp.task('watch', function () {
  gulp.watch(source + 'css/**/*.scss', ['css']);
  gulp.watch(source + 'js/main.js', ['js']);
  gulp.watch(source + 'icons/!*', ['icons']);
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
      source + 'js/main.js'
    ])
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest(dest));
});

// Icons
var runTimestamp = Math.round(Date.now()/1000);
gulp.task('icons', function(){
  return gulp.src(source +'/icons/*.svg')
    .pipe(plumber())
    .pipe(iconfont({
      fontName:       'icons',
      prependUnicode: true,
      formats:        ['ttf', 'eot', 'woff', 'svg', 'woff2'],
      timestamp:      runTimestamp,
      normalize:      true
    }))
    .on('glyphs', function(glyphs, options) {
      gulp.src(source +'/icons/icons.template')
        .pipe(consolidate('lodash', {
          glyphs:    glyphs,
          fontName:  'icons',
          fontPath:  'fonts/',
          className: 'icon'
        }))
        .pipe(rename({
          prefix:    '_',
          extname:   '.scss'
        }))
        .pipe(gulp.dest(source + 'css/base/'));
    })
    .pipe(gulp.dest(dest +'fonts/'));
});
