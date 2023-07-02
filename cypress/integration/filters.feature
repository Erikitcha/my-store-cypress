Feature: Product search filters

Scenario: Show products on screen
    Given the user is on the homepage
    When the user clicks on the woman option in the menu
    Then the webpage shows all the products

Scenario: Filter by Top Category
    Given the user is on products page
    When the user clicks on the top option in the category filter
    Then the webpage only shows products from the top category

Scenario: Filter by S Size
    Given the user is on products page
    When the user clicks on the S option in the size filter
    Then the webpage only shows products from the S Size

Scenario: Filter by Blue Color
    Given the user is on products page
    When the user clicks on the Blue option in the Color filter
    Then the webpage only shows blue color products

Scenario: Filter by Colorful Dress Proporties
    Given the user is on products page
    When the user clicks on the Colorful Dress in the Proporties filter
    Then the webpage only shows Colorful Dress products

Scenario: Filter by Cottom Compositions
    Given the user is on products page
    When the user clicks on the Cottom in the Compositions filter
    Then the webpage only shows Cottom products

Scenario: Filter by Casual Style
    Given the user is on products page
    When the user clicks on the Casual in the Style filter
    Then the webpage only shows Casual products

Scenario: Filter by in stock
    Given the user is on products page
    When the user clicks in stock in the Availability filter
    Then the webpage only shows in stock products

Scenario: Filter by new products
    Given the user is on products page
    When the user clicks in new in the Condition filter
    Then the webpage only shows new products
 
Scenario: Filter by Price
    Given the user is on products page
    When the user drags the bar to the right side by 20%
    Then the webpage only shows products at the searched price percentage