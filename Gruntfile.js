
module.exports = function(grunt) {
    grunt.initConfig({
      concat: {
        release: {
          src: [ 'js/main.js', 'js/replaceImages.js', 'js/values.js', 'js/prompt.js', 'js/getImages.js'],
          dest: 'release/main.js'
        }
      },
      copy: {
        release: {
          src: 'manifest.json',
          dest: 'release/manifest.json'
        }
      },
      jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: ['js/*.js', 'manifest.json'],
      },
      watch: {
        files: ['<%=jshint.files %>', 'manifest.json'],
        tasks: ['default']
      },
      jasmine: {
      test: {
        src: ['js/values.js', 'js/prompt.js', 'js/getImages.js',
              'js/replaceImages.js', 'js/main.js'],
        options: {
          specs: 'test/*.js'
        }
      }
    }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Register tasks
    grunt.registerTask('default', ['concat', 'jshint', 'copy']);
};
