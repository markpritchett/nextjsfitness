describe('Home Page', () => {
    it('contains default heading', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Welcome to')
      cy.get('a').contains('Next.js!')
    })
  })