/* eslint-disable no-undef */

describe('User Register', () => {
  const baseUrl = 'http://localhost:3000/dogs'
  const usernameInput = 'input[type="text"]'
  const emailInput = 'input[type="email"]'
  const passwordInput = 'input[type="password"]'

  beforeEach(() => {
    cy.visit(`${baseUrl}/login/create`)
  })

  it('should register with a new user', () => {
    const random = Math.random().toString(28).substring(2, 5)
    cy.get(usernameInput).type(`dogzeira${random}`)
    cy.get(emailInput).type(`godzeira${random}@randomemail.com`)
    cy.get(passwordInput).type('Umasenha123')

    cy.get('button').contains('Cadastrar').click()

    cy.url().should('eq', `${baseUrl}/account`)
  })

  it('should not register with an existing user', () => {
    cy.get(usernameInput).type('dog')
    cy.get(emailInput).type('dog@gmail.com')
    cy.get(passwordInput).type('dog')

    cy.get('button').contains('Cadastrar').click()

    cy.url().should('eq', `${baseUrl}/login/create`)
  })
})