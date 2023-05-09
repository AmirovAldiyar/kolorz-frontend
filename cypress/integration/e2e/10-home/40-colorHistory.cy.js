describe('10-20 История цветов и схем', () => {
    it.skip('Выбор цветов и схем', () => {
      cy.visit('/kolorz-art');      

      cy.get('#ColorWheel').eq(0).should('be.visible');

      cy.get('span').contains('tetradic').click();
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
      cy.get('#ColorWheel').eq(0).trigger('mousemove',  115, 115);
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(184, 255, 15); left: 383px; top: 289px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 526px; top: 821px; background: rgb(65, 152, 255);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 833px; top: 739px; background: rgb(217, 64, 255);');
      cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 690px; top: 207px; background: rgb(255, 188, 23);');


      cy.get('span').contains('square').click();
      cy.get('#ColorWheel').eq(0).should('be.visible');
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
      cy.get('#ColorWheel').eq(0).trigger('mousemove',  300, 300);
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(244, 255, 190); left: 568px; top: 474px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 568px; top: 554px; background: rgb(214, 255, 228);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 554px; background: rgb(255, 238, 243);');
      cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 474px; background: rgb(255, 237, 202);');


      cy.get('span').contains('isosceles').click();
      cy.get('#ColorWheel').eq(0).should('be.visible');
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
      cy.get('#ColorWheel').eq(0).trigger('mousemove',  200, 200);
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(212, 255, 96); left: 468px; top: 374px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 659px; top: 705px; background: rgb(165, 151, 255);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 799px; top: 565px; background: rgb(255, 133, 151);');

      cy.get('#ColorWheelhistory7').click()
      cy.get('#ColorWheelsb').invoke('val', 123).trigger('change').click();
      cy.get('#ColorWheelhistory7').click()

      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(184, 255, 15); left: 383px; top: 289px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 526px; top: 821px; background: rgb(65, 152, 255);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 833px; top: 739px; background: rgb(217, 64, 255);');
      cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 690px; top: 207px; background: rgb(255, 188, 23);');

      cy.get('#ColorWheelhistory8').click()
      cy.get('#ColorWheelsb').invoke('val', 123).trigger('change').click();
      cy.get('#ColorWheelhistory8').click()

      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(244, 255, 190); left: 568px; top: 474px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 568px; top: 554px; background: rgb(214, 255, 228);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 554px; background: rgb(255, 238, 243);');
      cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 474px; background: rgb(255, 237, 202);');

      cy.get('#ColorWheelhistory9').click()
      cy.get('#ColorWheelsb').invoke('val', 123).trigger('change').click();
      cy.get('#ColorWheelhistory9').click()

      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 568px; top: 554px; background: rgb(214, 255, 228);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 554px; background: rgb(255, 238, 243);');
      cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 474px; background: rgb(255, 237, 202);');
    })
  })