module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [ {
                    expand: true,
                    cwd: 'src',
                    src: ['*.js'],
                    dest: 'js',
                    ext: '.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            babel: {
                files: ['src/*.js'],
                tasks: ['babel']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['babel']);
};