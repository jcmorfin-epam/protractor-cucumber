@category
Feature: Xfinity Category Seactions

Scenario: Verify that Category Sections are properly displayed

Given I open Xfinity page
And I see Internet Category section
When I click on Internet Category
Then the internet section is expanded
And I am able to see the links within
When I click on Internet Category again
Then the internet section is collapsed back