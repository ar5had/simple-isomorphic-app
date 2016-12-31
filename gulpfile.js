var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
// vss will take a data from a format that can 
// be understand by gulp to data format that can 
// be understand by express.
var source = require('vinyl-source-stream');

gulp.task('live-server', () => {
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('bundle', () => {
   return browserify({
       entries: 'app/main.jsx',
       // to improve console logs
       debug: true
   })
   .transform(reactify)
   .bundle()
   .pipe(source('app.js'))
   .pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['bundle', 'live-server'], () => {
    // null means we already have our server going
    browserSync.init(null, {
        proxy: 'http://localhost:7777',
        port: 9001
    });
});
