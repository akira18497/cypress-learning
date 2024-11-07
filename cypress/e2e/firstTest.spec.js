/// <reference types="cypress" />

describe('First test suite', () => {
    beforeEach(() => {
        cy.navigateToFormLayouts()
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    })
    it('Find type of locators', () => {
        //put the code of the test

        //by Tag name
        cy.get('input')

        //by ID
        cy.get('#inputEmail')

        //by Class value
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeHolder = "Email"]')

        //by entire Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attribute
        cy.get('[placeHolder = "Email"][fullwidth]')

        //by tag, attribute id and class
        cy.get('input[placeHolder = "Email"]#inputEmail.input-full-width')

        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')
    })

    it('Practice get attribute', () => {

        //by Tag name, cannot use to get attribute: class, id
        cy.get('label')

        //by ID value
        cy.get('#inputEmail1')

        //by Class value
        cy.get('.menu-sidebar')

        //by Attribute name
        cy.get('[type]')

        //by Attribute and value
        cy.get('[type="radio"]')

        //by entire Class value
        cy.get('[class="inner-circle"]')
 
        //by two attribute
        cy.get('[type="radio"][name="undefined"]')
        
        //by tag, attribute id and class
        cy.get('.native-input')

        //finding web element using contains
        cy.contains('[for]', 'Password')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Using the Grid')
        .should('be.visible')
        .find('[for]').should('contain', 'Password')
         

    })
    it('Finding web element', () => {
        //get() - find Element on the page by locator globally
        
        //contains() - find HTML text and by text and locator

        //contains() finds first element has that text, does not care other element with the same text
        cy.contains('Sign in')

        //contains() template: ('html attribute', 'texts')
        cy.contains('[status="warning"]','Sign in')

        //find() - find child elements by locator, cannot be CALL from cy
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').get('button')

        //cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })

    it('Save subject of the command', () => {
        //put the code of the test

        cy.contains('nb-card', 'Using the Grid')

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]')

        //Cannot do thing like this
        /**
         *  const usingGrid = cy.contains('nb-card', 'Using the Grid')
            usingGrid.find('[for="inputEmail1"]').should('contain', 'Email')
            usingGrid.find('[for="inputPassword2"]')
         */

        //Alternative way: alias
        cy.contains('nb-card', 'Using the Grid').as('usingGrid')
        cy.get('@usingGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingGrid').find('[for="inputPassword2"]')

        //Alternative way: then()
        cy.contains('nb-card', 'Using the Grid').then(usingGrid => {
            cy.wrap(usingGrid).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingGrid).find('[for="inputPassword2"]')
        })
    })

    it('extract text values', () => {

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then(label => {
            const labelText = label.text()

            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain', 'Email address')
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })
        cy.get('[for="exampleInputEmail1"]').as('labelText').should('contain', 'Email address')

        //4
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
            console.log(classValue)
            expect(classValue).to.equal('label')
        })
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').as('labelText').should('contain', 'label')

        //5 invoke property
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').as('text').should('contain', 'test@test.com')
        cy.get('#exampleInputEmail1').invoke('show')
    })

})
