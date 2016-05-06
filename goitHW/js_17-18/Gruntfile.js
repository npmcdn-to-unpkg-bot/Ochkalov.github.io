module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/script.main.js'
            },
            css: {
                src: ['src/css/*.css'],
                dest: 'dist/css/style.main.css',
                options: {
                    separator: '\n\r'
                }
            }
        },
        uglify: {
            dist: {
                src: 'dist/js/script.main.js',
                dest: 'dist/js/script.main.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['style.main.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};