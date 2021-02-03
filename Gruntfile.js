const sass = require("node-sass")

module.exports = function(grunt) { 

    grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json'),
        concat: { 
            js: { 
                src: ["source/js/header.js","source/js/carousel.js"],
                dest: "dist/js/main.js"
            }
        },
        copy: { 
            images: { 
                files: [{
                    expand:true,
                    src: ["**/*.*"],
                    cwd: "source/images",
                    dest: "dist/images"
                }]
            }
        },
        watch: { 
            all: { 
                files: ["source/**"],
                tasks: ["sass","concat","copy","bake:build"]
            }
        },
        sass: { 
            options: { 
                implementation:sass,
                sourceMap: false,
            },
            dist: { 
                files: { 
                    "dist/main.css": "source/sass/main.scss"
                }
            }
        },
        bake: { 
            build: { 
                options:{

                },
                files: { 
                    "dist/index.html": "source/templates/pages/index.html",
                    "dist/products.html": "source/templates/pages/products.html",
                    "dist/services.html": "source/templates/pages/services.html",
                    "dist/about.html": "source/templates/pages/about.html",
                    "dist/hours&location.html": "source/templates/pages/hours&location.html",
                }
            }
        }
    
    })
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks( "grunt-bake" );
    grunt.registerTask('default', ['watch']);
}