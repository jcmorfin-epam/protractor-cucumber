@search
Feature: Xfinity Search

Scenario Outline: Verify that search funtionality works as expected

Given I open Xfinity page
When I enter the text to search as "<searchFor>"
And I click on search button
Then I should see results that match with "<searchFor>"

Examples:
| searchFor |
| nfl       |
| internet  |
| tv        |
