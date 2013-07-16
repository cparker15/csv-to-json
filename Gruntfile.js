module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    copy: false // leave components in bower_components/
                }
            }
        },

        shell: {
            'bower_csv-js': {
                command: [
                    'npm install',
                    'grunt'
                ].join('&&'),
                options: {
                    execOptions: {
                        cwd: 'bower_components/csv-js'
                    }
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'src/js/**/*.js']
        },

        copy: {
            build: {
                files: [
                    {expand: true, cwd: 'src/',   src: ['**'],     dest: 'build/'}
                ]
            },

            bower: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/csv-js/dist/',
                        src: ['**'],
                        dest: 'build/lib/csv-js/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/json2/',
                        src: ['json2.js'],
                        dest: 'build/lib/json2/'
                    }
                ]
            },

            dist: {
                files: [
                    {expand: true, cwd: 'build/', src: ['**'],     dest: 'dist/'}
                ]
            }
        },

        clean: {
            build: ['build', 'bower_components'],
            dist:  ['dist']
        }
    });

    // Load Grunt tasks from NPM packages
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', [
        'clean:build', // start with a clean slate
        'clean:dist',

        'jshint',     // lint our JS in src/
        'copy:build', // copy our JS from src/ to build/

        'bower',              // install Bower components
        'shell:bower_csv-js', // run post-install commands
        'copy:bower',         // copy Bower components to build/lib/

        'copy:dist', // copy everything to dist/

        'clean:build' // cleanup build/
    ]);
};
