const { setWorldConstructor } = require("cucumber");
const { browser } = require("protractor");
const EC = protractor.ExpectedConditions;

class SearchResultsPage {
    constructor(){  
        this.pageTitle = element(by.id('link'));
        this.results = element.all(by.css('h2.message-subject'));
    };

    
    verifySearchResultsMatch(searchedFor){
        browser.wait(EC.visibilityOf(this.pageTitle), 10000);
        //Verify that all results include the word that it was searched for
        this.results.each(function(element, index){
            element.getText().then(function (text) {
                expect(text.toLowerCase()).toContain(searchedFor);
                console.log("Verification #"+index+": "+text);
            });
        });
    };
}

module.exports = SearchResultsPage;