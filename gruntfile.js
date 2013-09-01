/*jshint node:true */
module.exports = function( grunt ) {
    grunt.loadNpmTasks( "grunt-git-authors" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-compress" );

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
    } );

    grunt.registerTask( 'test', [ 'jshint' ] );
    grunt.registerTask( 'dist', [ 'compress' ] );
};
