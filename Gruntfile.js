module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
         //just run $ grunt bower:install and you'll see files from your Bower packages in lib directory
        options: {
          layout: 'byType',
        }
      }
    },

    clean: {
      build: ['dist']
    },

    compass: {
      options: {
        importPath:['bower_components/bootstrap-sass/assets/stylesheets'],
        sassDir: 'styles/scss',
        imageDir: 'styles/images',
        force: true,
        //raw: 'Encoding.default_external = \'utf-8\'\n',
      },
      dev: {
        options: {
          cssDir: 'stylesheets',
          environment: 'development',
          outputStyle: 'nested',
          sourcemap: true
        }
      },
      dist: {
        options: {
          cssDir: 'stylesheets',
          environment: 'production',
          outputStyle: 'compressed',
          sourcemap: true
        }
      }
    },

    watch: {
      // options: {
      //   interrupt: true,
      // },
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      compass: {
        files: ['styles/scss/**/*.scss'],
        tasks: ['compass:dev']
      },

      // script: {
      //   files: ['app/js/**/*.js'],
      //   tasks: ['concat']
      // }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('deploy', ['clean', 'bower:install', 'compass:dist'])
  grunt.registerTask('build', ['clean','bower:install','compass:dev']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('default', ['watch']);
}
