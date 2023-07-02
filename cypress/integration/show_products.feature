Feature: Show Products

  Scenario: View product details
    Given the user is on the products screen
    And chose a blouse
    When the user clicks on more
    Then the page displays details of the blouse

  Scenario: Sort by products in stock first
    Given the user is on the products screen
    When the user chooses the value in stock in the filter by
    Then the page displays products in stock first
