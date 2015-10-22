module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['**/*.*'],
        tasks: ['less:build'],
        options: {
          spawn: false
        }
      }
    },

    less: {
      build: {
        options: {
          sourceMap: true,
          compress: false,
          sourceMapFilename: 'build/css/app.css.map'
        },
        files: {
          'build/css/app.css': 'src/less/index.less'
        }
      }
    }
  });

  // Load in less
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less:build', 'watch']);

};
