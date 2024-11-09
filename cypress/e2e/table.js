describe('example testing table', () => {
    beforeEach(() => {
        cy.navigateTo()
    })

    it('Web tables', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //1 Get the row by text
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeHolder="Age"]').clear().type(35)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '35')
          
            /**
             * Note: how to make this code work exactly like above
             * let row = cy.wrap(tableRow)
            row.find('.nb-edit').click()
            row.find('[placeHolder="Age"]').clear().type(35)
            row.find('.nb-checkmark').click()
            row.find('td').eq(6).should('contain', '35')
             */
        })

        //2 Get row by index
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableRow => {

            cy.wrap(tableRow).find('[placeholder = "First Name"]').type('John')
            cy.wrap(tableRow).find('[placeholder = "Last Name"]').type('Doe')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'John')
            cy.wrap(tableColumns).eq(3).should('contain', 'Doe')
        })
    })
})