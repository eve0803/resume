// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    rename = require('gulp-rename'),           //重命名
    sass = require('gulp-ruby-sass'),          //sass
    livereload = require('gulp-livereload');   //livereload

// HTML处理
gulp.task('html', function() {
    var htmlSrc = './src/*.html',
        htmlDst = './dist/';

    return gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst))
});
// 样式处理
gulp.task('css', function () {
    var cssSrc = './src/sass/*.scss',
        cssDst = './dist/css/';

    return  sass(cssSrc, { style: 'expanded' })
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(cssDst));
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './dist/images/';
    return gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    // 监听html
    gulp.watch('./src/*.html', function(event){
        gulp.run('html');
    })
    // 监听css
    gulp.watch('./src/scss/*.scss', function(){
        gulp.run('css');
    });
    // 监听images
    gulp.watch('./src/images/**/*', function(){
        gulp.run('images');
    });

});