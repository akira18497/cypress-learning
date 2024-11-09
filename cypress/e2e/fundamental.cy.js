describe('fundamental test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    cy.get('[data-test="fundamental-header"]').should('contain.text', 'Testing Fundamentals')
    cy.get('[data-test="accordion-item-1"]').click()
  })

  it('Accordion works correctly', () => {

    // Get all accordion items dynamically
    const baseSelector = '[data-test^="accordion-item-"]';

    cy.get(baseSelector).each(($element, index) => {
      // Construct the dynamic XPath for the current accordion item
      const dynamicXPath = `[data-test="accordion-item-${index + 1}"] div[role="button"]`

      // Log the current element for debugging
      cy.log(`Processing accordion item ${index + 1}`);

      // Click the accordion item
      cy.get(dynamicXPath).click();

      // Check visibility after click
      cy.get(dynamicXPath).should('have.attr', 'aria-expanded', 'true');
    });
  }) 
})