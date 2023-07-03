const { faker } = require("@faker-js/faker");

const RANDOM_EMAIL = faker.internet.email();
const RANDOM_PASSWORD = faker.internet.password();

Cypress.Commands.add('fillAuthCampWithFaker', (selector, type) => {
  switch (type) {
    case "email":
      cy.get(selector).type(RANDOM_EMAIL);
      break;
    case "password":
      cy.get(selector).type(RANDOM_PASSWORD);
      break;
    default:
      throw new Error("Type not registered or does not exist");
  }
});
