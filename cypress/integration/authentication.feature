Feature: User authentication

  Scenario: Registering user
    Given the user is on the create an account page
    When the user fill in the fields title, first name, last name, email, password, Date of Birth
    And clicks on the register button
    Then the website should show the message "Your account has been created" 

  Scenario: Login with the registered user
    Given the user is on the login page
    When the user insert your username, password
    And clicks on the login button
    Then the user is redirected to my account page
    And the username must appear in the header

  Scenario: Trying login with nonexistent account
    Given the user is on the login page
    When the user insert nonexistent username, password
    And clicks on the login button
    Then the website should show the message "Authentication failed"

  Scenario: Trying login without fill required fields
    Given the user is on the login page
    And does not fill in the fields email, password
    When the user clicks on the login button
    Then an alert message should be displayed