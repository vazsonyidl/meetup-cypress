describe('Todo app test', () => {
  const todoCardTestId = 'todo-element';
  const todoTaskInputTestId = 'task-input';
  const taskAddSubmitBtnTestId = 'add-task-btn';
  it('should visit home page', () => {
    cy.visit('/');
  })

  it('there should be no starting todo element', () => {
    cy.get(`[data-testid=${todoCardTestId}]`).should('have.length', 0);
  });

  it('should add a todo element', () => {
    cy.get(`[data-testid=${todoTaskInputTestId}]`).type('Some dummy thing');
    cy.getByTestId(taskAddSubmitBtnTestId).click();
    // cy.get(`[data-testid=${taskAddSubmitBtnTestId}]`).click();
    cy.get(`[data-testid=${todoCardTestId}]`).should('have.length', 1);
  });
})
