var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    /*
    cssmin = require('gulp-minify-css');*/


/*
var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',

    },
    src: { //Пути откуда брать исходники
        html: '../src/!*.html', //Синтаксис src/!*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: '../src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/style/main.scss',
        img: 'src/img/!**!/!*.*', //Синтаксис img/!**!/!*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/!**!/!*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/!**!/!*.html',
        js: 'src/js/!**!/!*.js',
        style: 'src/style/!**!/!*.scss',
        img: 'src/img/!**!/!*.*',
        fonts: 'src/fonts/!**!/!*.*'
    },
    clean: './build'
};
*/

gulp.task('default', function () {
    return gulp.src('../src/css/*.css')
        .pipe(concatCss("css/style.main.css"))
        .pipe(gulp.dest('app/'));
});

gulp.task('minify-css', function() {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(cleanCSS())
        .pipe(rename('style.main.min.css'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('concat', function() {
    return gulp.src('../src/js/*.js')
        .pipe(concat('script.main.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('compress', function() {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(rename('script.main.min.css'))
        .pipe(gulp.dest('app/js'));
});
// gulp.task('scripts', function() {
//     return gulp.src('./lib/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/'));
// });
//
// gulp.task('js:build', function () {
//     gulp.src(path.src.js) //Найдем наш main файл
//         .pipe(rigger()) //Прогоним через rigger
//         .pipe(sourcemaps.init()) //Инициализируем sourcemap
//         .pipe(uglify()) //Сожмем наш js
//         .pipe(sourcemaps.write()) //Пропишем карты
//         .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//         .pipe(reload({stream: true})); //И перезагрузим сервер
// });