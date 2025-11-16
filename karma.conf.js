//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-animate/angular-animate.js',
      '../node_modules/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '**/*.module.ts',
      '*!(.module|.spec).ts',
      '!(node_modules)/**/*!(.module|.spec).ts',
      '**/*.ts'
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },

    autoWatch: true,

    frameworks: ['jasmine', 'karma-typescript'],

    reporters: ['dots', 'karma-typescript'],

    karmaTypescriptConfig: {
      tsconfig: '../tsconfig.json'
    },

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-typescript'
    ]

  });
};
