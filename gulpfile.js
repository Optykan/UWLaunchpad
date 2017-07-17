var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browsersync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

//const elixir = require('laravel-elixir');

//require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 | nope sorry using gulp & browsersync instead
 |
 */


gulp.task('watch', function(){
    browsersync.init({
        // ----------------- HEY YOU -----------------
        // Change the following to the local URL where 
        // the site is being hosted. Think: how you
        // access your XAMPP from your browser.
        // -------------------------------------------
        proxy: "localhost:3000"
    });

    gulp.watch(['./resources/sass/*.scss'], ['sass'])
    gulp.watch(['./views/*.*', 'reload']).on('change', browsersync.reload)
});

//hey man i have no idea how this thing works
gulp.task('sass', function () {
  return gulp.src(['./resources/sass/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(e){
        return console.error(e.message)
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
    .pipe(browsersync.stream())
});

gulp.task('default', ['sass', 'watch']);