describe('10-10 Навигациия', () => {
    it('Тест перехода по страницам сайта', () => {
      cy.visit('/kolorz-art');      
      cy.get('a').contains('About').click();
      cy.get('h1').contains('About us');

      cy.get('a').contains('Home').click();
      cy.get('div').contains('CREATIVATION');

      cy.get('a').contains('Suggestion').click();
      cy.get('h1').contains('Suggestions');

      cy.get('#header').find('img').click();
      cy.get('div').contains('CREATIVATION');
    })
  })