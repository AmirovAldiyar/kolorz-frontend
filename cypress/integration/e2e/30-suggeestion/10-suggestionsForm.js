describe('10-60 Suggestion page', () => {
    it('Заполнение формы', () => {
      cy.visit('/');      
      cy.get('a').contains('Suggestion').click();
      cy.get('h1').contains('Suggestions');

      cy.get('input[name="name"]').invoke('val', 'Test user');
      cy.get('textarea').invoke('val', 'Gorgeous guys');
    
      cy.get('#suggestionButton').should('be.visible');
    })
  })