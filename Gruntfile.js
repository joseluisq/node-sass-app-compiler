module.exports = function(grunt) {
  'use strict';

  var config = {
    dist: './css',
    src: './scss'
  };

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    config: config,
    watch: {
      sass: {
        options: {
          livereload: true
        },
        files: ['<%= config.src %>/**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer']
      }
    },
    sass: {
      options: {
        sourcemap: true,
        loadPath: 'bower_components'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['*.{scss,sass}'],
          dest: '<%= config.dist %>',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.css',
          dest: '<%= config.dist %>'
        }]
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.dist %>',
          ext: '.css'
        }]
      }
    },
  });

  // Watch Tasks
  grunt.registerTask('serve', function() {
    console.log('\n' + pkg.name + ' v' + pkg.version);
    console.log('============================');

    grunt.task.run([
      'sass:dist',
      'autoprefixer',
      'watch'
    ]);
  });

  // Build Tasks
  grunt.registerTask('build', function() {
    console.log('\n' + pkg.name + ' v' + pkg.version);
    console.log('============================');

    grunt.task.run([
      'sass:dist',
      'autoprefixer',
      'cssmin:dist'
    ]);
  });
};
