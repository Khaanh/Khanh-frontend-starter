const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
sourcemaps = require('gulp-sourcemaps'),
prefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');


gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(prefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
})



gulp.task('js', function() {
	return gulp.src('app/js/**/*.js')
	.pipe(uglify({
		mangle: {
			toplevel: true
		},
	}))
	.pipe(concat('scripts.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('build/js'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('html', function() {
	return gulp.src('app/*.html')
	.pipe(gulp.dest('build/'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
		},
		notify: false
	});
});


gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/js/**/*.js', gulp.parallel('js'));
	gulp.watch('app/*.html', gulp.parallel('html'));
})

gulp.task('default', gulp.parallel('sass', 'js', 'html', 'browser-sync', 'watch'))