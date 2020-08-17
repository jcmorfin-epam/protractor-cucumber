const { Given, When, Then } = require('cucumber');
const { element, browser } = require('protractor');
const HomePage = require('../pages/HomePage');


Given (/^I open Xfinity page$/, async () => {
    await new HomePage().openPage();
});

Given (/^I see Internet Category section$/, async () => {
    await new HomePage().verifyInternetDirectoryIsDisplayed();
    //return;
});

When (/^I enter the text to search as "(.*)"$/, async (searchFor) => {
    await new HomePage().enterTextToSearch(searchFor);
});

When (/^I click on search button$/, async () => {
    await new HomePage().clickOnSearchButton();
    //return;
});

When (/^I click on Internet Category(.*)$/, async () => {
    await new HomePage().clickOnInternetSectionButton();
    //return;
});

Then (/^the internet section is expanded$/, async () => {
    await new HomePage().verifyInternetSectionIsDisplayed();
    //return;
});

Then (/^I am able to see the links within$/, async () => {
    await new HomePage().verifyInternetSectionLinksAreDisplayed();
    //return;
});

Then (/^the internet section is collapsed back$/, async () => {
    await new HomePage().verifyInternetSectionIsNotDisplayed();
    //return;
});