const { faker } = require("@faker-js/faker");

import loc from "../support/locators.js";

Cypress.Commands.add("getProductTexts", () => {
  const texts = {};

  return cy
    .get(loc.PRODUCT.PRICE)
    .invoke("text")
    .then((priceText) => {
      texts.currentPrice = priceText.trim();

      return cy.get(loc.PRODUCT.OLD_PRICE).invoke("text");
    })
    .then((oldPriceText) => {
      texts.oldPrice = oldPriceText.trim();

      return cy.get(loc.PRODUCT.DISCOUNT).invoke("text");
    })
    .then((discountText) => {
      texts.discount = discountText.trim();

      return texts;
    });
});
