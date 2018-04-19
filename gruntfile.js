module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		watch: {
			options: { livereload:true },
			files:['src/**'],
			tasks:[]
		},
		express: {
			all: {
				options: {
					port:8080,
					hostname:'localhost',
					bases:['./src'],
					livereload:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('server',['express','watch']);

};
