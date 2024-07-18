/* eslint-disable no-undef */

describe('User Logout', () => {
  const baseUrl = 'http://localhost:3000/dogs'

  beforeEach(() => {
    // log in user
    cy.visit(`${baseUrl}/login`)
    cy.get('input[type="text"].Input_input__DzvtE').type('dog')
    cy.get('input[type="password"].Input_input__DzvtE').type('dog')
    cy.get('button').contains('Entrar').click()
  })

  it('should log out', () => {
    cy.get('#exitButton').click()
    cy.url().should('eq', `${baseUrl}/login`)
  })

  // remove token from local storage
  it('should log out and remove token from local storage', () => {
    cy.get('#exitButton').click()
    cy.url().should('eq', `${baseUrl}/login`)
    cy.window().its('localStorage.token').should('be.undefined')
  })
})