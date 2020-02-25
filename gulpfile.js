const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  browserSync = require('browser-sync');


gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
})

gulp.task('js', function() {
	return gulp.src('app/js/**/*.js')

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