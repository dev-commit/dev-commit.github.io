
const gulp         = require('gulp'); 
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const del          = require('del');
const cssnano      = require('gulp-cssnano');
const imagemin     = require('gulp-imagemin');


//---------------------------------------------------
// WATCH
//---------------------------------------------------

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('sass', function() {
	gulp.src('app/sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }, 
        notify: false
    });
});

//---------------------------------------------------
// BUILD
//---------------------------------------------------

gulp.task('build', ['clean', 'css', 'img'], function() {
	gulp.src('app/*.html')      .pipe(gulp.dest('dist'));
	gulp.src('app/js/**/*')     .pipe(gulp.dest('dist/js'));
	gulp.src('app/fonts/**/*')  .pipe(gulp.dest('dist/fonts'));
	gulp.src('app/img/**/*')    .pipe(gulp.dest('dist/img'));
	gulp.src('app/libs/**/*')   .pipe(gulp.dest('dist/libs'));
	gulp.src('app/module/**/*') .pipe(gulp.dest('dist/module'));

});

gulp.task('clean', function() {
	del.sync('dist');
});

gulp.task('css', function() {
	gulp.src('app/css/**/*.css')
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
	gulp.src('app/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'));
});
