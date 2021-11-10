/* eslint-disable */

describe('Navigation', () => {
  it('should change the language from english to french', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[to*="home"]').click()

    cy.url().should('include', '/home')

    cy.get('h1').contains(/Home/)

    cy.findByText('English').type("French{enter}")

    cy.get('h1').contains(/Accueil/)
  })
})
