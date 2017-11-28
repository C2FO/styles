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
          sourceMapFilename: 'docs/assets/css/app.css.map',
          sourceMapURL: 'app.css.map'
        },
        files: {
          'docs/assets/css/app.css': [
            'src/less/index.less',
            'node_modules/grid-system/src/index.less'
          ]
        }
      },
      dist: {
        options: {
          sourceMap: false,
          compress: true,
        },
        files: {
          'dist/c2fo-styles.min.css': 'src/less/index.less'
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
      },
      // The zzz characters are used to help reduce the odds of a name collision.
      publish: {
        command: [
          'UI_GUIDE_ZZZ_CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`',
          'git checkout -b zzz-publishing-branch',
          'cp -R docs/* .',
          'git add .',
          'git commit --no-verify -m "automated commit for publishing"',
          'git push origin zzz-publishing-branch:gh-pages --force',
          'git checkout $UI_GUIDE_ZZZ_CURRENT_BRANCH',
          'unset UI_GUIDE_ZZZ_CURRENT_BRANCH',
          'git branch -D zzz-publishing-branch'
        ].join('&&')
      }
    },

    shared_config: {
      default: {
        options: {
          name: 'globalVariables'
        },
        src: 'src/variables.yml',
        dest: [
          'dist/variables.less',
          'dist/variables.scss'
        ]
      }
    }
  });

  // Load libraries
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-shared-config');

  // Default task(s).
  grunt.registerTask('monitor', ['less:docs', 'watch']);
  grunt.registerTask('setup', ['shell:setup']);
  grunt.registerTask('update', ['shell:update']);
  grunt.registerTask('publish', ['shell:publish']);
  grunt.registerTask('dist', ['shared_config', 'less:dist']);

};
