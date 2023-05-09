describe('10-60 Навигациия', () => {
    it('Проверка перехода между страницами сайта и перехода на дополнительные ресурсы', () => {
      cy.visit('/kolorz-art');      
      cy.get('#footer').get('a').contains('About').click();
      cy.get('h1').contains('About us');

      cy.get('#footer').get('a').contains('Home').click();
      cy.get('div').contains('CREATIVATION');

      cy.get('#footer').get('a').contains('Suggestion').click();
      cy.get('h1').contains('Suggestions');

      cy.get('#footer').find('img').first().should('have.attr', 'src', '/static/kolorz-art/1.0.2/6a7b1626db9dde7c37e5bdc69c9d0d0b.png').click();
      cy.get('div').contains('CREATIVATION');

      cy.get('#footer').find('img').eq(2).should('have.attr', 'src', '/static/kolorz-art/1.0.2/0747c117dc6db64832a7de9d57cbf9bc.png')
      cy.get('#footer').find('img').eq(3).should('have.attr', 'src', '/static/kolorz-art/1.0.2/03119c61a6a7eed27421590717b3f4e8.png')
      cy.get('#footer').find('img').eq(4).should('have.attr', 'src', '/static/kolorz-art/1.0.2/4e21c46126ea6520b1b5c0884f7185ae.png')
      cy.get('#footer').find('img').eq(5).should('have.attr', 'src', '/static/kolorz-art/1.0.2/0678144c6373f1b66a2f566481b125a4.png')
    })
  })