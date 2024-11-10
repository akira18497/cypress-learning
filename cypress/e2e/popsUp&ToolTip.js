describe('popUp', () => {
    beforeEach(() => {
        cy.navigateTo()
    })

    it('Should show tooltip', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Tooltip With Icon')
          .contains('Show Tooltip').click()
        cy.get('nb-tooltip').should('contain.text', 'This is a tooltip')
    })

    it.only('dialog box', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('a').find('.nb-trash').first().click()

        /**
         * Approach to Window confirmation
         */
        //1: Check confirmation message
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('Are you sure you want to delete?')
        })

        //2: Check confirmation messaage
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('a').find('.nb-trash').first().click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

        //3
        cy.get('a').find('.nb-trash').first().click()
        cy.on('window:confirm', () => false)

    })
})
