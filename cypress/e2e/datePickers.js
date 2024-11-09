import { selectDayFromCurrent } from "../support/functionFile"

describe('2nd test suite', () => {

    beforeEach(() => {
        cy.navigateTo()
    })

    it('date picker', () => {

      cy.contains('Forms').click();
      cy.contains('Datepicker').click() 
      cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
        cy.wrap(input).click()        
        const dateToAssert = selectDayFromCurrent(5)
        cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
        cy.wrap(input).should('have.value', dateToAssert)
      })
    })
})