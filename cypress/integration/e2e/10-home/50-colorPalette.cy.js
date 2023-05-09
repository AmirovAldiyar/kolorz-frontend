describe('10-50 Цветовая паллетка', () => {
    it('Генерация световых паллеток', () => {
      cy.visit('/kolorz-art');      
      cy.get('span').contains('complementary').click();

      cy.get('#ColorWheel').eq(0).should('be.visible');
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
      cy.get('#ColorWheel').eq(0).trigger('mousemove',  300, 300);
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(244, 255, 190); left: 568px; top: 474px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 554px; background: rgb(255, 238, 243);');

      cy.get('input[value="#f4ffbe"]').should('be.visible');

      cy.get('#ExportButton').click();

      cy.get('div').contains('#f4ffbe').should('be.visible');
      cy.get('div').contains('#ffeef3').should('be.visible');
      cy.get('div').contains('Gradient').should('be.visible');

      cy.get('div').contains('#8177ff').should('be.visible');
      cy.get('div').contains('#fff143').should('be.visible');
      cy.get('div').contains('Gradient').should('be.visible');

      cy.get('#ExportPallete').eq(0).should('be.visible');
    })
  })