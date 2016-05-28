// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    rename = require('gulp-rename'),           //重命名
    sass = require('gulp-ruby-sass')          //sass


// HTML处理
gulp.task('html', function() {
    var htmlSrc = './src/*.html',
        htmlDst = './build/';

    return gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst))
});
// 样式处理
gulp.task('css', function () {
    var cssSrc = './src/sass/*.scss',
        cssDst = './build/css/';

    return  sass(cssSrc, { style: 'expanded' })
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(cssDst));
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


});