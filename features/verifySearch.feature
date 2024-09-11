Feature: Access a Product via search

  Background:
    Given I am on the ebay page

  Scenario Outline: Verify result name matches with the search
    Given I click search bar with keyword <keyword>
    When I click <category> in search category
    Then Verify first result match with <keyword>

    Examples:
      | keyword | category                       |
      | MacBook | Computers/Tablets & Networking |