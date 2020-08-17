"use strict";
const {After, Before, Status} = require('cucumber');
const {setDefaultTimeout} = require('cucumber'); 
const fs = require('fs');
setDefaultTimeout(60 * 1000);

After( (testCase) =>{
    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then((screenShot) => {
            fs.existsSync("reports/screenshots") || fs.mkdirSync("reports/screenshots");
            let decodedImage = new Buffer.from(screenShot, 'base64');    
            let stream = fs.createWriteStream('./reports/screenshots/'+testCase.pickle.name+'.png');
            stream.write(new Buffer.from(screenShot, 'base64'));
            stream.end();
            return this.attach(decodedImage, 'image/png');
        });
    }
});