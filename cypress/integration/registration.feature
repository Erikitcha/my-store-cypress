Feature: User Registration

  Scenario: Accessing Personal Information
    Given the user is on the website homepage
    When the user clicks on the "Manage my personal information" link
    Then the user should be redirected to the authentication page

  Scenario: User registration without required fields
    Given the user is on the create an account page
    And the user does not fill required fields
    When the user clicks on the register button
    Then an alert message should be displayed 

  Scenario: Registering user
    Given the user is on the create an account page
    When the user fill in fill in the title field, first name, last name, email, password, Date of Birth
    And clicks on the register button
    Then the website should show the message "Your account has been created" 

  Scenario: Pre-registered Email Validation
    Given the user is on the authentication page
    When the user enters a pre-registered email
    And clicks on the submit button
    Then an error message should be displayed
