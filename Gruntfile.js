module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['docs/**/*', 'src/**/*'],
        tasks: ['less:docs'],
        options: {
          spawn: false
        }
      }
    },

    less: {
      docs: {
        options: {
          sourceMap: true,
          compress: false,
          sourceMapFilename: 'docs/assets/css/app.css.map'
        },
        files: {
          'docs/assets/css/app.css': 'src/less/index.less'
        }
      }
    },

    shell: {
      setup: {
        command: [
          'brew install ruby',
          'gem install bundler',
          'bundle install'
        ].join('&&')
      },
      update: {
        command: 'bundle install'
      }
    }
  });

  // Load libraries
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('monitor', ['less:docs', 'watch']);
  grunt.registerTask('setup', ['shell:setup']);
  grunt.registerTask('update', ['shell:update']);

};
