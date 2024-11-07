describe('dropdown list', () => {

    beforeEach(() => {
        cy.navigateToFormLayouts()
    })
    it('Lists and dropdowns', () => {
        //1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')

        //2
        cy.get('nav nb-select').then( dropDown => {

            cy.wrap(dropDown).click()

            cy.get('.options-list nb-option').each((listItem, index) => {

                const itemTest = listItem.text().trim()

                cy.wrap(listItem).click()
                cy.wrap(dropDown).should('contain', itemTest)

                if(index < 3){
                    cy.wrap(dropDown).click()
                }
                
            })

        })
    })
})