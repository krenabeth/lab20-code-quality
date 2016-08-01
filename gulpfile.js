'use strict';

var gulp = require('gulp');
var Sass = require('gulp-sass');


gulp.task('Sass', function() {
	return gulp.src('./Sass/**/*.scss')
	.pipe(Sass().on('error', Sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('Sass:watch', function() {
	gulp.watch('./Sass/**/*.scss', ['Sass']);
});var gulp = require('gulp');

// var karma = require('karma').Server;

// gulp.task('test', function(done) {
// 	new karma({
// 		configFile: __dirname + '/karma.conf.js' 
// 	}, done).start();
// });

// // Set up a Gulp watcher that will execute your 
// // JSHint and Jasmine tests on every file save.
// var jslint = require('gulp-jslint');
 
// gulp.task('default', function () {
//     return gulp.src(['source.js'])
//             .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
//             .pipe(jslint.reporter( 'my-reporter' ));
// });

// const jasmine = require('gulp-jasmine');
 
// gulp.task('default', () =>
//     gulp.src('test/spec.js')
//         // gulp-jasmine works on filepaths so you can't have any plugins before it 
//         .pipe(jasmine())
// );
