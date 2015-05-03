'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-simple-mocha');

	var srcFiles = ['Gruntfile.js', 'index.js'];

	grunt.initConfig({

		jshint: {
			dev: {
				src: srcFiles
			},

			options: {
				jshintrc: true
			}
		},

		simplemocha: {
			dev:{
				src: srcFiles
			}
		},

		watch: {
			files: srcFiles,
			tasks: ['jshint:dev']
		}
	});

	grunt.registerTask('test', ['jshint:dev']);
	grunt.registerTask('default', ['test']);
};