const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
const { faker } = require('@faker-js/faker');

require("@4tw/cypress-drag-drop");

Given('the user is on the homepage', () => {
    cy.visit('http://www.automationpractice.pl/index.php');
});

When('the user clicks on the woman option in the menu', () => {
    cy.get('.sf-menu').contains('Women').click();
});

Then('the webpage shows all the products', () => {
    cy.get('.top-pagination-content > .product-count').contains('Showing 1');
});


Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks on the top option in the category filter', () => {
    cy.get('#layered_category_4').click();
});

Then('the webpage only shows products from the top category', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Categories: Tops');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks on the S option in the size filter', () => {
    cy.get('#layered_id_attribute_group_1').click();
});

Then('the webpage only shows products from the S Size', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Size: S');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks on the Blue option in the Color filter', () => {
    cy.get('#layered_id_attribute_group_14').click();
});

Then('the webpage only shows blue color products', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Color: Blue');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks on the Colorful Dress in the Proporties filter', () => {
    cy.get('#layered_id_feature_18').click();
});

Then('the webpage only shows Colorful Dress products', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Properties: Colorful Dress');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks on the Cottom in the Compositions filter', () => {
    cy.get('#layered_id_feature_5').click();
});

Then('the webpage only shows Cottom products', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Compositions: Cotton');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks on the Casual in the Style filter', () => {
    cy.get('#layered_id_feature_11').click();
});

Then('the webpage only shows Casual products', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Styles: Casual');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks in stock in the Availability filter', () => {
    cy.get('#layered_quantity_1').click();
});

Then('the webpage only shows in stock products', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Availability: In stock');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user clicks in new in the Condition filter', () => {
    cy.get('#layered_condition_new').click();
});

Then('the webpage only shows new products', () => {
    cy.get('#enabled_filters').should('be.visible').contains('Condition: New');
});

Given('the user is on products page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');
});

When('the user drags the bar to the right side by 20%', () => {
    const targetValue = 0.2

    cy.get('.ui-slider-range').first().then((slider) => {
        const sliderButtonSelector = '[style="left: 0%;"]'

        const sliderButton = cy.get(sliderButtonSelector).first()
        const sliderBB = slider.get(0).getBoundingClientRect();

        sliderButton.drag(sliderButtonSelector, {
            force: true,
            target: {
                x: sliderBB.width * targetValue,
                y: 0
            }
        })
    })
});

Then('the webpage only shows products at the searched price percentage', () => {
    cy.get('#layered_price_range')
});