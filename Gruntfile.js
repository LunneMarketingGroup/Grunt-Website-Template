module.exports = function(grunt) {
  grunt.initConfig({

    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['img']
      }
    }, 
    cssmin: {
      combine: {
        files: {
          'assets/css/SITE.min.css': ['assets/css/src/screen.css'],
          'assets/css/SITE-print.min.css': ['assets/css/src/print.css'],          
          'assets/css/SITE-ie.min.css': ['assets/css/src/ie.css']
        }
      }
    },
    uglify: {
        options: {
          mangle: false,
          compress: true,
          drop_console: true
        },
        my_target: {
          files: {
            'assets/js/SITE.min.js': ['assets/js/src/SITE.js']
          }
        }
    },
    autoprefixer: {
        no_dest: {
          src: 'assets/css/src/screen.css' // globbing is also possible here
        }
        
    },
    compass: {
        dist: {
          options: {
            config: 'config.rb',
            sourcemap: true
          }
        }
    },
    trimtrailingspaces: {
        main: {
          src: ['*.html'],
          options: {
            filter: 'isFile',
            encoding: 'utf8',
            failIfTrimmed: false
          }
        }
    }
    

  });
  
  // Load the plugins
  grunt.loadNpmTasks('grunt-trimtrailingspaces');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');


  // Default tasks.
  grunt.registerTask('compress-images', ['imageoptim']);
  
  grunt.registerTask('minify', ['cssmin','uglify']);
  grunt.registerTask('prefix', ['autoprefixer']);
  grunt.registerTask('compass-compile', ['compass']);
  grunt.registerTask('production', ['compass','prefix','minify','trimtrailingspaces']);

};


