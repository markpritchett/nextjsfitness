describe('Categories Page', () => {
    describe('without any sub-categories', () => {
        it('contains breadcrumb', () => {
            cy.visit('http://localhost:3000/categories/flunges')
            cy.get('[data-test=breadcrumb-item]').contains('Flunges')
        })
    })
    describe('with sub-categories', () => {
        it('contains breadcrumb', () => {
            cy.visit('http://localhost:3000/categories/groopsters')
            cy.get('[data-test=breadcrumb-item]').contains('Groopsters')
        })
        it('contains link to sub-category', () => {
            cy.visit('http://localhost:3000/categories/groopsters')
            cy.get('[data-test=sub-category-link]').contains('Go Go Goxes').should('have.attr', 'href', '/categories/groopsters/go-go-goxes')
        })
    })
})