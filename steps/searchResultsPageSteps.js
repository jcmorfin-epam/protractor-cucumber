const { Given, When, Then } = require('cucumber');
const SearchResultsPage = require('../pages/SearchResultsPage');


Then (/^I should see results that match with "(.*)"$/, async (searchedFor) => {
    new SearchResultsPage().verifySearchResultsMatch(searchedFor);
});
