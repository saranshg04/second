module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            ugtarget: {
                files: {
                    'rel/output.min.js': ['controller.js', 'logic.js', 'model.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['*.js'],
                tasks: ['uglify:ugtarget'],
                options: {
                    spawn: false,
                },
            },
        }

    });
    //load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify','grunt-contrib-watch');
    grunt.registerTask('default', ['uglify:ugtarget','watch']);
}
