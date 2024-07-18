/* eslint-disable no-undef */

describe('User Login', () => {
  const baseUrl = 'http://localhost:3000/dogs'
  const usernameInput = 'input[type="text"].Input_input__DzvtE'
  const passwordInput = 'input[type="password"].Input_input__DzvtE'

  beforeEach(() => {
    cy.visit(`${baseUrl}/login`)
  })

  it('should log in with valid credentials', () => {
    cy.get(usernameInput).type('dog')
    cy.get(passwordInput).type('dog')
    cy.get('button').contains('Entrar').click()

    cy.url().should('eq', `${baseUrl}/account`)
  })

  it('should not log in with invalid credentials', () => {
    cy.get(usernameInput).type('dog')
    cy.get(passwordInput).type('cat')
    cy.get('button').contains('Entrar').click()

    cy.url().should('eq', `${baseUrl}/login`)
  })
})