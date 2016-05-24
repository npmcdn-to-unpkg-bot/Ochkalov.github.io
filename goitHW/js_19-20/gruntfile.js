module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['src/js/*.js','src/js/plagins/*.js'],
                dest: 'dist/js/script.main.js',
                options: {
                    separator: ';'
                }
            },
            css: {
                src: ['src/css/reset.css','src/css/fontaw.css','src/css/fontubuntu.css','src/css/style.css'],
                dest: 'dist/css/style.main.css',
                options: {
                    separator: '\n\r'
                }
            }
        },
        uglify: {
            dist: {
                src: ['dist/js/script.main.js'],
                dest: 'dist/js/script.main.min.js'
            },
        } ,
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
        },
        sass: {
            options: {
                sourceMap: false,
                linefeed : 'crlf'
            },
            dist: {
                files: {
                    'src/css/style.css': 'src/scss/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['src/scss/*.scss','src/js/*.js'],
                tasks: ['sass','concat','cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default',['sass','concat','cssmin','uglify']);
}