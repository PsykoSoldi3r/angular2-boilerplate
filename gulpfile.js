var gulp = require('gulp'),
    tsConfig = require('./tsconfig.json'),
    typescript = require('gulp-typescript'),
    del = require('del'),
    concat = require('gulp-concat'),
    systemBuilder = require('systemjs-builder'),
    sass = require('gulp-sass');

gulp.task('clean', function(){
    return del ( "dist" );
});

gulp.task('compile',['clean'], function(){
    return gulp
        .src('src/App/**/*.ts')
        .pipe( typescript( tsConfig.compilerOptions ) )
        .pipe( gulp.dest( 'dist' ) );
});

gulp.task('compile-sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError ) )
        .pipe(gulp.dest('./') );
});

gulp.task('build',['compile']);

gulp.task('build-production', ['compile'], function(){
    var builder = new systemBuilder('', './system.config.js');
    return builder.buildStatic('app','dist/main.min.js');
} );

gulp.task('watch', function(){
    gulp.watch(['src/App/**/*.ts'], ['compile'] );
    gulp.watch(['scss/**/*.scss'], ['compile-sass'] );
});

gulp.task('default', ['watch'] );