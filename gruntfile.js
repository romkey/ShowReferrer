/*jshint node:true */
module.exports = function( grunt ) {
    grunt.loadNpmTasks( "grunt-git-authors" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-compress" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-imagemin" );
    grunt.loadNpmTasks( "grunt-text-replace" );
    grunt.loadNpmTasks( "grunt-version" );

    grunt.initConfig( {
	jshint: {
	    all: [ 'gruntfile.js', 'lib/js/*.js', 'test/*.js', 'package.json' ],
	    options: {
		jquery: true,
		smarttabs: true
	    }
	},
	compress: {
	    zip: {
		options: {
		    archive: './dist.zip'
		},
		files: [
		    { expand: true,  src: [ 'manifest.json',  '*.js', 'img/*' ] }
		]
	    }
	},
	copy: {
	    main: {
		files: [
		    { expand: true, cwd: './lib/js', src: [ '*' ], dest:  'lib/ShowReferrer.crx/js/' },
		    { expand: true, cwd: './lib/js', src: [ '*' ], dest:  'lib/ShowReferrer.safariextension/js/' },

		    { expand: true, cwd: './lib/img', src: [ '*' ], dest: 'lib/ShowReferrer.crx/img/' },
		    { expand: true, cwd: './lib/img', src: [ '*' ], dest: 'lib/ShowReferrer.safariextension/img/' },
		]
	    }
	},
	watch: {
	    scriptsandcss: {
		files: [ 'lib/js/**/*.js' ],
		tasks: [ 'copy' ],
		options: {
		    nospawn: true
		}
	    },
	    images: {
		files: [ 'lib/img/**/*.jpg', 'lib/img/**/*.png', 'lib/img/**/*.gif' ],
		tasks: [ 'imagemin' ],
		options: {
		    nospawn: true
		}
	    }
	},
	version: {
	    pkg: grunt.file.readJSON( 'package.json' )
	},
	replace: {
	    version: {
		src: [ 'lib/ShowReferrer.crx/manifest.json', 'lib/ShowRefererrer.safariextension/Info.plist' ],
		overwrite: true,
	    }
	}
    } );

    grunt.registerTask( 'test', [ 'jshint' ] );
    grunt.registerTask( 'dist', [ 'text-replace', 'copy', 'compress' ] );
};
