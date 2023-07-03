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

Given("the user is on the website homepage", () => {
  cy.visit("http://automationpractice.pl/index.php");
});

When('the user clicks on the "Manage my personal information" link', () => {
  cy.get(loc.BTN.BTN_MY_PERSONAL_INFO).click();
});

Then("the user should be redirected to the authentication page", () => {
  cy.url().should("include", "controller=authentication");
  cy.contains("Authentication").should("be.visible");
});

Given("the user is on the create an account page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?controller=authentication&back=identity#account-creation"
  );
  cy.get(loc.USER_REGISTRATION.EMAIL_ACCOUNT).type(email);
  cy.get(loc.BTN.BTN_SUBMIT_CREATE).click();
});

And("the user does not fill required fields", () => {
  cy.get(loc.USER_REGISTRATION.FIRSTNAME).clear();
  cy.get(loc.USER_REGISTRATION.LASTNAME).clear();
  cy.get(loc.USER_REGISTRATION.EMAIL).clear();
  cy.get(loc.USER_REGISTRATION.PASSWORD).clear();
});

When("the user clicks on the register button", () => {
  cy.get(loc.BTN.BTN_REGISTRY).click();
});

Then("an alert message should be displayed", () => {
  cy.get(loc.ALERT.MESSAGE).contains("is required");
});

Given("the user is on the create an account page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?controller=authentication&back=identity#account-creation"
  );
  cy.get(loc.USER_REGISTRATION.EMAIL_ACCOUNT).type(email);
  cy.get(loc.BTN.BTN_SUBMIT_CREATE).click();
});

When(
  "the user fill in fill in the title field, first name, last name, email, password, Date of Birth",
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

Given("the user is on the authentication page", () => {
  cy.visit(
    "http://automationpractice.pl/index.php?controller=authentication&back=identity"
  );
});

When("the user enters a pre-registered email", () => {
  cy.get(loc.USER_REGISTRATION.EMAIL_ACCOUNT).type(email);
});

And("clicks on the submit button", () => {
  cy.get(loc.BTN.BTN_SUBMIT_CREATE).click();
});

Then("an error message should be displayed", () => {
  cy.get(loc.ALERT.CREATE_ACCOUNT_ERROR).should("be.visible");
});
