Cypress.Commands.add('visitAuthenticationPage', () => {
    cy.visit('http://automationpractice.pl/index.php');
    cy.get('a[title="Manage my personal information"]').click();
});

Cypress.Commands.add('emailInputBox', (email) => {
    cy.get('#create-account_form input[type="text"]')
      .type(email)

    cy.get('.submit button#SubmitCreate')
      .click()
})