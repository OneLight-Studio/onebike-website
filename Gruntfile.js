module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["build/"],
    less: {
      production: {
        options: {
          yuicompress: true,
          compress: true
        },
        files: {
          "build/css/styles.css": "src/less/styles.less"
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/font', src: ['**'], dest: 'build/font'},
          {expand: true, cwd: 'src/img', src: ['**'], dest: 'build/img'},
          {expand: true, cwd: 'src/php', src: ['**'], dest: 'build/php'},
          {expand: true, cwd: 'src/view', src: ['**'], dest: 'build/view'},
          {src: ['src/.htaccess'], dest: 'build/.htaccess'},
          {src: ['src/index.php'], dest: 'build/index.php'},
          {src: ['src/properties.json'], dest: 'build/properties.json'}
        ]
      }
    },
    concat: {
      dist: {
        src: ['src/js/util.js', 'src/js/nav.js', 'src/js/main.js'],
        dest: 'build/js/site.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'build/js/site.js': ['build/js/site.js']
        }
      }
    },
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'build/img',
          src: ['**.{png,jpg,gif}'],
          dest: 'build/img'
        }]
      }
    }
    /*htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true
        },
        files: {
          'build/view/default/main.php': 'build/view/default/main.php',
          'build/view/default/site.php': 'build/view/default/site.php',
          'build/view/fr/main.php': 'build/view/fr/main.php',
          'build/view/fr/site.php': 'build/view/fr/site.php'
        }
      }
    }*/
    /*
    https://github.com/andismith/grunt-responsive-images
    https://github.com/addyosmani/grunt-uncss
    */
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //grunt.loadNpmTasks('grunt-contrib-htmlmin');

  //grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['clean','less','copy','concat','uglify','imagemin']);

};