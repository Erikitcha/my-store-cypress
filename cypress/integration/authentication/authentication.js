const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
const { faker } = require('@faker-js/faker');

const email = faker.internet.email();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const pwd = faker.internet.password(); 


Given('the user is on the create an account page', () => {
  cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=identity#account-creation');
  cy.get('#create-account_form input[type="text"]').type(email);
  cy.get('.submit button#SubmitCreate').click();
});

When('the user fill in the fields title, first name, last name, email, password, Date of Birth', () => {
  cy.get('#id_gender2').click();
  cy.get('#customer_firstname').type(firstName);
  cy.get('#customer_lastname').type(lastName);
  cy.get('#passwd').type(pwd);
  cy.get('#days').select(faker.number.int({min: 1, max: 31}));
  cy.get('#months').select(faker.date.month());
  cy.get('#years').select('2023');
});

And('clicks on the register button', () => {
  cy.get('#submitAccount > span').click();
});

Then('the website should show the message "Your account has been created"', () => {
  cy.get('.alert').contains('Your account has been created');
});

Given('the user is on the login page', () => {
  cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=identity');
});

When('the user insert your username, password', ()=> {
  cy.get('#email').type(email);
  cy.get('#passwd').type(pwd)
});

And('clicks on the login button', () => {
  cy.get('#SubmitLogin > span').click();
})

Then('the user is redirected to my account page', () => {
  cy.wait(2500)
  cy.url().should('include', 'controller=identity');
})

And('the username must appear in the header', ()=> {
  cy.get('.account > span').contains(firstName);
})

Given('the user is on the login page', () => {
  cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=identity');
});

When('the user insert nonexistent username, password', ()=> {
  cy.get('#email').type(faker.internet.email());
  cy.get('#passwd').type(faker.internet.password());
});

And('clicks on the login button', () => {
  cy.get('#SubmitLogin > span').click();
})

Then('the website should show the message "Authentication failed"', () => {
  cy.get('#center_column > :nth-child(2)').contains("Authentication failed");
})

Given('the user is on the login page', () => {
  cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=identity');
})

And('does not fill in the fields email, password', () => {
  cy.get('#email').clear();
  cy.get('#passwd').clear();
})

When('the user clicks on the login button', () => {
  cy.get('#SubmitLogin > span').click();
})

Then('an alert message should be displayed', ()=> {
  cy.get('#center_column > :nth-child(2)').contains("required");
})