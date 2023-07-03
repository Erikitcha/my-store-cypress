const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");
const { faker } = require("@faker-js/faker");

Given("the user is on the products screen", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

And("chose a blouse", () => {
  cy.get(".block_content > .tree > :nth-child(1) > .grower").click();
  cy.get(".block_content").contains("Blouses").click();
  //cy.get('.ajax_block_product').contains('.right-block > h5 > .product-name').should('be.visible','Blouse');
});

When("the user clicks on more", () => {
  cy.get(".lnk_view > span").click();
});

Then("the page displays details of the blouse", () => {
  cy.get("#short_description_content > p").contains("blouse");
});

Given("the user is on the products screen", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user chooses the value in stock in the filter by", () => {
  cy.get("#selectProductSort").select("In stock");
});

Then("the page displays products in stock first", () => {
  cy.get(
    ":nth-child(1) > .product-container > .right-block > .availability > .available-now"
  ).contains("In stock");
});
