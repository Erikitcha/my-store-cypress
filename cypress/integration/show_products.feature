Feature: Show Products

  Scenario: View product details
    Given the user is on the products screen
    And choose a blouse
    When the user clicks on more
    Then the page displays details of the blouse

  Scenario: Sort by products in stock first
    Given the user is on the products screen
    When the user chooses the value in stock in the filter by
    Then the page displays products in stock first

Scenario: Check value of discounted products
    Given there are discounted product
    When the user view the price
    Then the value of the product must be less than the old value
    And must match the amount of the discount percentage