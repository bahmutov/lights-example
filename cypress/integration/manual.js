/// <reference types="cypress" />
it('changes color', () => {
  cy.visit('http://localhost:1234')
  cy
    .get('#app')
    .should('have.class', 'green') // initial
    .click()
    .should('have.class', 'yellow')
    .click()
    .should('have.class', 'red')
    .click()
    .should('have.class', 'green') // back to initial
})
