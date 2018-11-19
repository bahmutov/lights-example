/// <reference types="cypress" />
import machine from '../../src/machine'
import { getAppClass, selector } from '../../src/view'

// test generated from the state machine path traversal
it('changes color from state', () => {
  cy.visit('http://localhost:1234')

  // we start in the initial state
  cy.get(selector).should('have.class', getAppClass(machine.initialState.value))

  const path = [
    { state: 'yellow', event: 'TIMER | {}' },
    { state: 'red', event: 'TIMER | {}' },
    { state: 'green', event: 'TIMER | {}' }
  ]
  path.forEach(({ state, event }) => {
    // event name to Cypress method could be dynamic
    // in our case it is always "TIMER" -> "cy.click()"
    cy.log(`checking transition to ${state}`)
    cy.get(selector).click().should('have.class', getAppClass(state))
  })
})
