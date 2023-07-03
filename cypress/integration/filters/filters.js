import loc from "../../support/locators.js";

require("@4tw/cypress-drag-drop");

const {
  Given,
  When,
  Then,
  Before,
} = require("cypress-cucumber-preprocessor/steps");
const { faker } = require("@faker-js/faker");

Given("the user is on the homepage", () => {
  cy.visit("http://www.automationpractice.pl/index.php");
});

When("the user clicks on the woman option in the menu", () => {
  cy.get(".sf-menu").contains("Women").click();
});

Then("the webpage shows all the products", () => {
  cy.get(".top-pagination-content > .product-count").contains("Showing 1");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks on the top option in the category filter", () => {
  cy.get(loc.FILTER.TOP_CATEGORY).click();
});

Then("the webpage only shows products from the top category", () => {
  cy.get(loc.FILTER.ENABLE_FILTER)
    .should("be.visible")
    .contains("Categories: Tops");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks on the S option in the size filter", () => {
  cy.get(loc.FILTER.S_SIZE).click();
});

Then("the webpage only shows products from the S Size", () => {
  cy.get(loc.FILTER.ENABLE_FILTER).should("be.visible").contains("Size: S");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks on the Blue option in the Color filter", () => {
  cy.get(loc.FILTER.BLUE_COLOR).click();
});

Then("the webpage only shows blue color products", () => {
  cy.get(loc.FILTER.ENABLE_FILTER).should("be.visible").contains("Color: Blue");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks on the Colorful Dress in the Proporties filter", () => {
  cy.get(loc.FILTER.COLORFUL_DRESS).click();
});

Then("the webpage only shows Colorful Dress products", () => {
  cy.get(loc.FILTER.ENABLE_FILTER)
    .should("be.visible")
    .contains("Properties: Colorful Dress");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks on the Cottom in the Compositions filter", () => {
  cy.get(loc.FILTER.COTTOM_COMPOSITION).click();
});

Then("the webpage only shows Cottom products", () => {
  cy.get(loc.FILTER.ENABLE_FILTER)
    .should("be.visible")
    .contains("Compositions: Cotton");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks on the Casual in the Style filter", () => {
  cy.get(loc.FILTER.CASUAL).click();
});

Then("the webpage only shows Casual products", () => {
  cy.get(loc.FILTER.ENABLE_FILTER)
    .should("be.visible")
    .contains("Styles: Casual");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks in stock in the Availability filter", () => {
  cy.get(loc.FILTER.IN_STOCK).click();
});

Then("the webpage only shows in stock products", () => {
  cy.get(loc.FILTER.ENABLE_FILTER)
    .should("be.visible")
    .contains("Availability: In stock");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user clicks in new in the Condition filter", () => {
  cy.get(loc.FILTER.NEW).click();
});

Then("the webpage only shows new products", () => {
  cy.get(loc.FILTER.ENABLE_FILTER)
    .should("be.visible")
    .contains("Condition: New");
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("the user drags the bar to the right side by 20%", () => {
  const targetValue = 0.3;

  cy.get(".ui-slider-range")
    .first()
    .then((slider) => {
      const sliderButtonSelector = '[style="left: 0%;"]';
      const sliderButton = cy.get(sliderButtonSelector).first();
      const sliderBB = slider.get(0).getBoundingClientRect();

      sliderButton.drag(sliderButtonSelector, {
        force: true,
        target: {
          x: sliderBB.width * targetValue,
          y: 0,
        },
      });
    });
});

Then("the webpage only shows products at the searched price percentage", () => {
  cy.wait(2500);
  cy.get("#layered_price_range").invoke("text").as("currentPriceRange");

  cy.get("@currentPriceRange").then((currentPriceRange) => {
    const priceRangeParts = currentPriceRange.split(" - ");
    const minPrice = parseFloat(priceRangeParts[0].replace("$", ""));
    const maxPrice = parseFloat(priceRangeParts[1].replace("$", ""));

    cy.get(".product_list .product-container").each(($product) => {
      const priceText = $product.find(".content_price .price").text();
      const price = parseFloat(priceText.replace("$", ""));

      expect(price).to.be.within(minPrice, maxPrice);
    });
  });
});

Given("the user is on products page", () => {
  cy.visit(
    "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
  );
});

When("choose a random product and add it to the cart", () => {
  // Obter a lista de todos os produtos na página
  cy.get(".product_list .product-container").then(($products) => {
    // Obter um índice aleatório
    const randomIndex = Math.floor(Math.random() * $products.length);

    // Clicar no produto aleatório
    cy.wrap($products[randomIndex]).click();

    // Adicionar o produto ao carrinho
    cy.get("#add_to_cart button").click();
  });
});
