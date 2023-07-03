import loc from "../../support/locators.js";

const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");
const { faker } = require("@faker-js/faker");

const email = faker.internet.email();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const pwd = faker.internet.password();

Given("the user is on the create an account page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?controller=authentication&back=identity#account-creation"
  );
  cy.get(loc.USER_REGISTRATION.EMAIL_ACCOUNT).type(email);
  cy.get(loc.BTN.BTN_SUBMIT_CREATE).click();
});

When(
  "the user fill in the fields title, first name, last name, email, password, Date of Birth",
  () => {
    cy.get(loc.USER_REGISTRATION.GENDER_MRS).click();
    cy.get(loc.USER_REGISTRATION.FIRSTNAME).type(firstName);
    cy.get(loc.USER_REGISTRATION.LASTNAME).type(lastName);
    cy.get(loc.USER_REGISTRATION.PASSWORD).type(pwd);
    cy.get(loc.USER_REGISTRATION.DAYS).select(
      faker.number.int({ min: 1, max: 31 })
    );
    cy.get(loc.USER_REGISTRATION.MONTH).select(faker.date.month());
    cy.get(loc.USER_REGISTRATION.YEAR).select("2000");
  }
);

And("clicks on the register button", () => {
  cy.get(loc.BTN.BTN_REGISTRY).click();
});

Then(
  'the website should show the message "Your account has been created"',
  () => {
    cy.get(loc.ALERT.MESSAGE).contains("Your account has been created");
  }
);

Given("the user is on the login page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?controller=authentication&back=identity"
  );
});

When("the user insert your username, password", () => {
  cy.get(loc.LOGIN.EMAIL).type(email);
  cy.get(loc.LOGIN.PASSWORD).type(pwd);
});

And("clicks on the login button", () => {
  cy.get(loc.BTN.BTN_LOGIN).click();
});

Then("the user is redirected to my account page", () => {
  cy.wait(2500);
  cy.url().should("include", "controller=identity");
});

And("the username must appear in the header", () => {
  cy.get(loc.HEADER.NAME).contains(firstName);
});

Given("the user is on the login page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?controller=authentication&back=identity"
  );
});

When("the user insert nonexistent username, password", () => {
  cy.get(loc.LOGIN.EMAIL).type(faker.internet.email());
  cy.get(loc.LOGIN.PASSWORD).type(faker.internet.password());
});

And("clicks on the login button", () => {
  cy.get(loc.BTN.BTN_LOGIN).click();
});

Then('the website should show the message "Authentication failed"', () => {
  cy.get(loc.ALERT.ERROR_LOGIN).contains("Authentication failed");
});

Given("the user is on the login page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?controller=authentication&back=identity"
  );
});

And("does not fill in the fields email, password", () => {
  cy.get(loc.LOGIN.EMAIL).clear();
  cy.get(loc.LOGIN.PASSWORD).clear();
});

When("the user clicks on the login button", () => {
  cy.get(loc.BTN.BTN_LOGIN).click();
});

Then("an alert message should be displayed", () => {
  cy.get(loc.ALERT.REQUIRED_FIELD).contains("required");
});
