var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/results.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        storeScreenshots:true,
        screenshotsDirectory: 'reports/screenshots/',
        launchReport: true,
        metadata: {
            "Browser": "Firefox",
            "Platform": "Windows 10"
        }
    };
 
    reporter.generate(options);