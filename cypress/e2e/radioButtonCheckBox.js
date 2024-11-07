/// <reference types="cypress" />

describe('2nd test suite', () => {

    beforeEach(() => {
        cy.navigateToFormLayouts()
    })

    it.only('check box', () => {
      cy.contains('Modal & Overlays').click()
      cy.contains('Toastr').click() 
      
      cy.get('[type="checkbox"]').then(checkBox => {
        cy.wrap(checkBox).uncheck({force: true})
        
        //alternative way: cy.wrap(checkBox).check({force: true})
        cy.wrap(checkBox).click({multiple: true, force: true})
      })
    })

    it('radio button', () => {
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            //in this html, because it's hidden from cypress, by adding force: true it will perform action
            cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
            cy.wrap(radioButtons).eq(1).check({force: true})
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('be.disabled')
        })
    })
})