var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack' /*we can load components using require */, 'sourcemap'/*we can see in which part of the js or jsx file there is problem*/]
    },
    reporters: ['mocha'], //show which test fails and which test pases
    client: { //where the config is sent to
      mocha: {
        timeout: '5000' //if the test doesn't finish in 5 seconds, cancel it
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}
