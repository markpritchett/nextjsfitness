describe('Home Page', () => {
    it('contains app name', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Next.jsFitness')
    })
  })