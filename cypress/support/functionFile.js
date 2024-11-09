export function selectDayFromCurrent(day){
          
    let date = new Date()
    date.setDate(date.getDate()+ day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
    let futureYear = date.getFullYear()
    let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`
  
    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
      if(!dateAttribute.includes(futureMonth)  || !dateAttribute.includes(futureYear)){
        cy.get('[data-name="chevron-right"]').click()
        selectDayFromCurrent(day)
      } else {
        cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
      }
    })
  
    return dateToAssert
  }
  