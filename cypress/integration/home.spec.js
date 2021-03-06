describe('Home Page', () => {
    describe('Header', () => {
      it('contains app name', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Next.jsFitness')
      })
      it('contains links to main categories', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test=header-nav-link]').contains('Flunges').should('have.attr', 'href', '/categories/flunges')
        cy.get('[data-test=header-nav-link]').contains('Groopsters').should('have.attr', 'href', '/categories/groopsters')
        cy.get('[data-test=header-nav-link]').contains('Goawhips').should('have.attr', 'href', '/categories/goawhips')
        cy.get('[data-test=header-nav-link]').contains('Ductorms').should('have.attr', 'href', '/categories/ductorms')
      })
      it('contains link to cart page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test=header-cart-link]').should('have.attr', 'href', '/cart')
      })
      it('mobile menu button only appears at correct viewport', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test=mobile-menu-button]').should('not.be.visible')
        cy.viewport(320, 480)
        cy.get('[data-test=mobile-menu-button]').should('be.visible')
      })
    })
  })