Cypress.Commands.add('getByTestId', (locator, options) => {
  return cy.get(`[data-testid="${locator}"]`, options);
});
