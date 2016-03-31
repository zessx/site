// Gulp
var gulp = require('gulp');

// Debug plugins
var plumber      = require("gulp-plumber");

// Other plugins
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano      = require('gulp-cssnano');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var iconfont     = require('gulp-iconfont');
var consolidate	 = require('gulp-consolidate');

// Paths
var source = 'assets/';
var dest   = 'public/';

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
			source + 'vendor/perfect-scrollbar/js/perfect-scrollbar.js',
			source + 'js/main.js'
		])
		.pipe(plumber())
		.pipe(concat('app.js'))
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
