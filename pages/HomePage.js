const { setWorldConstructor } = require("cucumber");
const { browser, ExpectedConditions } = require("protractor");
const expect = require('chai').expect;
const EC = protractor.ExpectedConditions;

class HomePage {
    constructor(){  
        this.internetDirectory = element(by.id('category-item-chsi'));
        this.internetButton = element(by.buttonText('Internet'));
        this.internetSection = element(by.css('section.arc-accordion_content'));
        this.homeNetworkLink = element(by.xpath('//a[@title="Connectivity, Equipment, WiFi & Managing Your Network"]'));
        this.webBrowsingLink = element(by.xpath('//a[@title="Using Email & Web Browsers With Xfinity Service"]'));
        this.nortonSecurityLink = element(by.xpath('//a[@title="Xfinity Norton Security Suite"]'));

        this.searchTextField =  element(by.name('messageSearchField'));
        this.searchButton = element(by.className('lia-button-searchForm-action'));
    };

    openPage(){
        browser.get('https://forums.xfinity.com/', 15000);
    };

    enterTextToSearch(searchFor){
        browser.wait(EC.visibilityOf(this.searchButton), 10000);
        this.searchTextField.sendKeys(searchFor)
    };

    clickOnSearchButton(){
        browser.wait(EC.elementToBeClickable(this.searchButton), 10000);
        this.searchButton.click();
        browser.sleep(5000);
    };

    verifyInternetDirectoryIsDisplayed(){
        expect (internetDirectory).to.be.true(EC.visibilityOf(this.internetDirectory));
    };

    verifyInternetSectionIsNotDisplayed(){
        expect (internetDirectory).to.be.false(EC.visibilityOf(this.internetSection));
    };

    verifyInternetSectionIsDisplayed(){
        expect (internetDirectory).to.be.true(EC.visibilityOf(this.internetSection));
    };

    clickOnInternetSectionButton(){
        internetButton.click();
    };

    verifyInternetSectionLinksAreDisplayed(){
        expect (internetDirectory).to.be.true(EC.visibilityOf(this.homeNetworkLink));
        expect (internetDirectory).to.be.true(EC.visibilityOf(this.webBrowsingLink));
        expect (internetDirectory).to.be.true(EC.visibilityOf(this.nortonSecurityLink));
    };
}

module.exports = HomePage;