const path = require('path');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  capabilities: {
    'browserName': 'firefox'
  },

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    './features/*.feature'
  ],

  allScriptsTimeout: 200000,
  getPageTimeout: 200000,

  cucumberOpts: {
    // require step definitions
    require: [
      path.resolve('./steps/**/*.js')
    ],
    tags: '@search',
    format: 'json:reports/results.json',
  },

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },

};