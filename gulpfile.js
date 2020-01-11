var gulp = require('gulp');
var tm = require('bgtm')(gulp);
var scss = require('bgtm-engine-scss');
var js = require('bgtm-engine-js');
var images = require('bgtm-engine-images');
var svgsprite = require('bgtm-engine-svgsprite');
var copy = require('bgtm-engine-copy');

var config = {
    src: 'src/Bootstrap4Test.Presentation/',
    dest: 'src/Bootstrap4Test.Web/static/'
};

tm.add('scss', {
    runOnBuild: true,
    watch: true,
    watchSource: [
        config.src + 'scss/**/*.scss'
    ],
    liveReload: true,
    engine: scss,
    engineOptions: {
        'src': config.src + 'scss/*.scss',
        'dest': config.dest + 'css/'
    }
});

// tm.add('js-vendors', {
//     runOnBuild: true,
//     watch: true,
//     watchSource: [
//         config.src + 'js/vendor/**/*.js'
//     ],
//     liveReload: true,
//     engine: js,
//     engineOptions: {
//         'src': config.src + 'js/vendor/**/*.js',
//         'dest': config.dest + 'js/',
//         'outputFileName': 'vendors.js'
//     }
// });

// tm.add('fonts', {
//     runOnBuild: true,
//     watch: true,
//     watchSource: [
//         config.src + 'fonts/*',
//     ],
//     liveReload: true,
//     engine: copy,
//     engineOptions: {
//         'paths': [
//             {
//                 'src': config.src + 'fonts',
//                 'dest': config.dest + 'fonts'
//             }
//         ]
//     }
// });


// tm.add('images', {
//     runOnBuild: true,
//     watch: true,
//     watchSource: [
//         config.src + 'images/**/*'
//     ],
//     liveReload: true,
//     engine: images,
//     engineOptions: {
//         'src': config.src + 'images/**/*',
//         'dest': config.dest + 'images/'
//     }
// });

tm.run();