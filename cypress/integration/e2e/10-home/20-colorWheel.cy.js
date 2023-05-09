describe('10-20 Цветовой круг', () => {
    it('Выбор цвета', () => {
      cy.visit('/kolorz-art');      
      
      cy.get('#ColorWheel').eq(0).should('be.visible');
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
      cy.get('#ColorWheel').eq(0).trigger('mousemove',  200, 200);
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(212, 255, 96); left: 468px; top: 374px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 748px; top: 654px; background: rgb(237, 146, 255);');

      cy.get('div[style="background: rgb(212, 255, 96);"]').should('be.visible');
      cy.get('input[value="#d4ff60"]').should('be.visible');

      cy.get('span').contains('isosceles').click();
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(212, 255, 96); left: 468px; top: 374px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 659px; top: 705px; background: rgb(165, 151, 255);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 799px; top: 565px; background: rgb(255, 133, 151);');

      cy.get('#ColorWheelsb').invoke('val', 123).trigger('change').click();

      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(102, 123, 46); left: 468px; top: 374px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 659px; top: 705px; background: rgb(79, 72, 123);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 799px; top: 565px; background: rgb(123, 64, 72);');

      cy.get('div[style="background: rgb(102, 123, 46);"]').should('be.visible');
      cy.get('input[value="#667b2e"]').should('be.visible');
    })
  })