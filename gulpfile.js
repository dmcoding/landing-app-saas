/*
* Gulpfile
* @version: 1.0.0 (Fri, 08 May 2020)
* @author: HtmlStream
* @license: Htmlstream (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

require('./gulpfiles/watch')
require('./gulpfiles/dist')
require('./gulpfiles/build')
require('./gulpfiles/preview')
require('./gulpfiles/svg-compiler')

gulp.task('heroku', ['wiredep','inject'], function () {
  return gulp.src(config.base)
    .pipe(plugins.webserver({
        host: '0.0.0.0', 
        port: process.env.PORT,
        livereload: false,
        open: false
    }));
});
