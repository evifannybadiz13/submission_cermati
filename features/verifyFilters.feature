Feature: Access a Product via category after applying multiple filters

Background:
    Given I am on the ebay page


  Scenario Outline: Verify 3 filter tags are applied
    Given I click search by category to open Electronics > <subCategory>
    When I click <subCategory1> in the left navigation
    Then I click All Filters
    Given I apply filter Condition
    When I apply filter Price with price <price>
    When I apply filter Item Location
    Then Verify that the filter tags are applied <text>

    Examples:
      | subCategory               | subCategory1              | price | text                                       |
      | Cell phones & accessories | Cell Phones & Smartphones |  1000 | Cell Phones & Smartphones over IDR1,000.00 |
