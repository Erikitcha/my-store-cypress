const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
const { faker } = require('@faker-js/faker');

const email = faker.internet.email();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const pwd = faker.internet.password(); 

Given('the user is on the website homepage', () => {
  cy.visit('http://automationpractice.pl/index.php');
});
  
When('the user clicks on the "Manage my personal information" link', () => {
  cy.get('a[title="Manage my personal information"]').click();
});
  
Then('the user should be redirected to the authentication page', () => {
  cy.url().should('include', 'controller=authentication');
  cy.contains('Authentication').should('be.visible');
});

Given('the user is on the create an account page', () =>{
  cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=identity#account-creation');
  cy.get('#create-account_form input[type="text"]').type(email);
  cy.get('.submit button#SubmitCreate').click();
})

And('the user does not fill required fields', () =>{
    cy.get('#customer_firstname').clear();
    cy.get('#customer_lastname').clear();
    cy.get('#email').clear();
    cy.get('#passwd').clear();
})

When('the user clicks on the register button', () =>{
  cy.get('#submitAccount > span').click();
})

Then('an alert message should be displayed', () =>{
    cy.get('.alert').contains('is required');
})

Given('the user is on the create an account page', () => {
  cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=identity#account-creation');
  cy.get('#create-account_form input[type="text"]').type(email);
  cy.get('.submit button#SubmitCreate').click();
});

When('the user fill in fill in the title field, first name, last name, email, password, Date of Birth', () =>{
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

  
Given('the user is on the authentication page', () => {
  cy.visit('http://automationpractice.pl/index.php?controller=authentication&back=identity');
});
  
When('the user enters a pre-registered email', () => {
  cy.get('#create-account_form input[type="text"]').type(email);
});
  
And('clicks on the submit button', () => {
  cy.get('.submit button#SubmitCreate').click();
});
  
Then('an error message should be displayed', () => {
  cy.get('.alert.alert-danger#create_account_error').should('be.visible');
});