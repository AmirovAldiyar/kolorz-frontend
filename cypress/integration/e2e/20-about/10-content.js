describe('10-60 About page', () => {
    it('О kolorz.art', () => {
      cy.visit('/');      
      cy.get('a').contains('About').click();
      cy.get('h1').contains('About us');
      cy.get('p').contains('We are just three programmers who knows the struggling of picking a harmonic color pallette, so we prepared this incredible yet simple tool for you, whoever you are: an artist or designer, or if you just beginning to dive deep into color theory - this place is for you! Our tool is simple to use and intuitively understandable, and variation of color schemes gives a great deal of different balanced color pallettes to export.');
      
      cy.get('span').contains('Arina').should('be.visible');
      cy.get('span').contains('Noelliya1').should('be.visible');
      cy.get('span').contains('Aldiyar').should('be.visible');
    })
  })