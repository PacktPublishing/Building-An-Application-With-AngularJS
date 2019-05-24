module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',

        // our app
        '*.js',

        // tests
        'test/**/*-spec.js',

        // templates
        'tpl/*html'
    ],

    // generate js files from html templates
    preprocessors: {
        'tpl/*.html': 'ng-html2js'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
