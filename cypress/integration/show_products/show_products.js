const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");
const { faker } = require("@faker-js/faker");

import loc from "../../support/locators.js";

Given("the user is on the products screen", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

And("choose a blouse", () => {
  cy.get(loc.MENU.TOPS_SELECTOR).click();
  cy.get(loc.MENU.FULL_SELECTOR).contains("Blouses").click();
});

When("the user clicks on more", () => {
  cy.get(loc.MENU.MORE_BUTTON).click();
});

Then("the page displays details of the blouse", () => {
  cy.get(loc.MENU.PRODUCT_DETAILS).contains("blouse");
});

Given("the user is on the products screen", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user chooses the value in stock in the filter by", () => {
  cy.get(loc.MENU.SORT_BY_OPTIONS).select("In stock");
});

Then("the page displays products in stock first", () => {
  cy.get(
    loc.MENU.IN_STOCK_TEXT
  ).contains("In stock");
});

Given("there are discounted product", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
  cy.get(loc.MENU.SPECIAL_BLOCK).should("be.visible");
});

When("the user view the price", () => {
  cy.get(loc.PRODUCT.PRICE).should("be.visible");
});

Then("the value of the product must be less than the old value", () => {
  cy.getProductTexts().then((productTexts) => {
    const currentPrice = parseFloat(productTexts.currentPrice.replace("$", ""));
    const oldPrice = parseFloat(productTexts.oldPrice.replace("$", ""));

    cy.wrap(currentPrice).should("be.lessThan", oldPrice);
  });
});

And("must match the amount of the discount percentage", () => {
  cy.getProductTexts().then((productTexts) => {
    const oldPrice = parseFloat(productTexts.oldPrice.replace("$", ""));
    const discountPercentage = parseFloat(
      productTexts.discount.replace("-", "").replace("%", "")
    );

    const discountAmount = (discountPercentage / 100) * oldPrice;
    const currentPrice = parseInt(oldPrice - discountAmount);

    const expectedCurrentPrice = parseInt(
      productTexts.currentPrice.replace("$", "")
    );
    cy.wrap(currentPrice).should("eq", expectedCurrentPrice);
  });
});
