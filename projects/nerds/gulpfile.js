var gulp = require("gulp"),
// connect = require("gulp-connect"),
// opn = require("opn"),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    size = require('gulp-size'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

/*// Запускаем локальный сервер
 gulp.task('connect', function() {
 connect.server({
 root: 'app',
 livereload: true,
 port: 8888
 });
 opn('http://localhost:8888');
 });

 // Работа с HTML
 gulp.task('html', function () {
 gulp.src('./app/!*.html')
 .pipe(connect.reload());
 });

 // Работа с CSS
 gulp.task('css', function () {
 gulp.src('./app/css/!*.css')
 .pipe(connect.reload());
 });

 // Работа с JS
 gulp.task('js', function () {
 gulp.src('./app/js/!*.js')
 .pipe(connect.reload());
 });

 // Слежка
 gulp.task('watch', function () {
 gulp.watch(['./app/!*.html'], ['html']);
 gulp.watch(['./app/js/!*.js'], ['js']);
 gulp.watch(['./app/css/!*.css'], ['css']);
 });

 // Задача по-умолчанию
 gulp.task('default', ['connect', 'watch']);*/

// ====================================================
// ============== Локальная разработка APP ============

// Работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
      .pipe(gulp.dest('app/'));
});

// Подключаем ссылки на bower components
gulp.task('wiredep', function () {
  gulp.src('app/*.html')
      .pipe(wiredep())
      .pipe(gulp.dest('app/'))
});

// Запускаем локальный сервер (только после компиляции jade)
gulp.task('server', ['html'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});
//  SASS
gulp.task('sass', function () {
  gulp.src('app/css/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/css/'));
});

// слежка и запуск задач
gulp.task('watch', function () {
  // gulp.watch('app/*.html', ['html']);
  gulp.watch('bower.json', ['wiredep']);
  gulp.watch('app/css/sass/*.scss', ['sass']);
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', reload);
});

// Задача по-умолчанию
gulp.task('default', ['server', 'watch']);
// ====================================================
// ====================================================
// ===================== Сборка ======================
// очистка папки
gulp.task('clean', function(){
  return gulp.src('dist')
      .pipe(clean());
});
// переносим html, css, js в папку dist
gulp.task('useref',function(){
  var assests = useref.assests();
  return gulp.src('app/*.html')
      .pipe(assests)
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss({compatibility: 'ie8'})))
      .pipe(assests.restore())
      .pipe(useref())
      .pipe(gulp.dest('dist'));
});
// перенос шрифтов
gulp.task('fonts', function(){
  gulp.src('app/fonts/*')
      .pipe(filter['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'])
      .pipe(gulp.dist('dist/fonts'))
});
// картинки
gulp.task('images', function(){
  return gulp.src('app/img/**/*')
      .pipe(imagemin({
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dist('dist/img'));
});
// остальные файлы - favicon.oco и пр.
gulp.task('extras', function(){
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ]).pipe(gulp.dest('dist'));
});

// Сборка и вывод размера содержимого папки dist
gulp.task('dist', ['useref', 'images', 'fonts', 'extras'], function(){
  return gulp.src('dist/**/*').pipe(size({title: 'build'}));
});

// Собираем папку DIST
gulp.task('build', ['clean'], function(){
  gulp.start('dist');
});

// ====================================================
// ====================================================
// ===================== Функции ======================

// Более наглядный вывод ошибок
var log = function (error) {
  console.log([
    '',
    "----------ERROR MESSAGE START----------",
    ("[" + error.name + " in " + error.plugin + "]"),
    error.message,
    "----------ERROR MESSAGE END----------",
    ''
  ].join('\n'));
  this.end();
}


// ====================================================
// ====================================================
// =============== Важные моменты  ====================
// gulp.task(name, deps, fn)
// deps - массив задач, которые будут выполнены ДО запуска задачи name
// внимательно следите за порядком выполнения задач!

