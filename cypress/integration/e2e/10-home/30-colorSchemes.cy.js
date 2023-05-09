describe('10-30 Цветовые схемы', () => {
    it('Схема: isosceles', () => {
      cy.visit('/kolorz-art');      

      cy.get('span').contains('isosceles').click();

      cy.get('#ColorWheel').eq(0).should('be.visible');
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
      cy.get('#ColorWheel').eq(0).trigger('mousemove',  200, 200);
      cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

      cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(212, 255, 96); left: 468px; top: 374px;');
      cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 659px; top: 705px; background: rgb(165, 151, 255);');
      cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 799px; top: 565px; background: rgb(255, 133, 151);');

      cy.get('input[value="#d4ff60"]').should('be.visible');
    })

    it('Схема: square', () => {
        cy.visit('/kolorz-art');      
  
        cy.get('span').contains('square').click();
  
        cy.get('#ColorWheel').eq(0).should('be.visible');
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
        cy.get('#ColorWheel').eq(0).trigger('mousemove',  300, 300);
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

        cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(244, 255, 190); left: 568px; top: 474px;');
        cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 568px; top: 554px; background: rgb(214, 255, 228);');
        cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 554px; background: rgb(255, 238, 243);');
        cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 474px; background: rgb(255, 237, 202);');

        cy.get('input[value="#f4ffbe"]').should('be.visible');
    })

    it('Схема: complementary', () => {
        cy.visit('/kolorz-art');      

        cy.get('span').contains('complementary').click();

        cy.get('#ColorWheel').eq(0).should('be.visible');
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
        cy.get('#ColorWheel').eq(0).trigger('mousemove',  300, 300);
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

        cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(244, 255, 190); left: 568px; top: 474px;');
        cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 648px; top: 554px; background: rgb(255, 238, 243);');

        cy.get('input[value="#f4ffbe"]').should('be.visible');
    })

    it('Схема: tetradic', () => {
        cy.visit('/kolorz-art');      

        cy.get('span').contains('tetradic').click();

        cy.get('#ColorWheel').eq(0).should('be.visible');
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
        cy.get('#ColorWheel').eq(0).trigger('mousemove',  115, 115);
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

        cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(184, 255, 15); left: 383px; top: 289px;');
        cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 526px; top: 821px; background: rgb(65, 152, 255);');
        cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 833px; top: 739px; background: rgb(217, 64, 255);');
        cy.get('#ColorWheelColorPicker2').should('have.attr', 'style', 'visibility: visible; left: 690px; top: 207px; background: rgb(255, 188, 23);');

        cy.get('input[value="#b8ff0f"]').should('be.visible');
    })

    it('Схема: analogous', () => {
        cy.visit('/kolorz-art');      
        cy.get('#ColorWheel').eq(0).should('be.visible');
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
        cy.get('#ColorWheel').eq(0).trigger('mousemove',  115, 115);
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

        cy.get('span').contains('analogous').click();

        cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(184, 255, 15); left: 383px; top: 289px;');
        cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 301px; top: 432px; background: rgb(39, 255, 16);');
        cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 526px; top: 207px; background: rgb(255, 231, 17);');

        cy.get('input[value="#b8ff0f"]').should('be.visible');
    })

    it('Схема: monochram', () => {
        cy.visit('/kolorz-art');      

        cy.get('#ColorWheel').eq(0).should('be.visible');
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
        cy.get('#ColorWheel').eq(0).trigger('mousemove',  115, 115);
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

        cy.get('span').contains('monochram').click();

        cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(184, 255, 15); left: 383px; top: 289px;');
        cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 439px; top: 345px; background: rgb(204, 255, 67);');
        cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 496px; top: 402px; background: rgb(222, 255, 120);');

        cy.get('input[value="#b8ff0f"]').should('be.visible');
    })

    it('Схема: triadic', () => {
        cy.visit('/kolorz-art');      

        cy.get('span').contains('triadic').click();

        cy.get('#ColorWheel').eq(0).should('be.visible');
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click().should('be.focused');
        cy.get('#ColorWheel').eq(0).trigger('mousemove',  115, 115);
        cy.get('#ColorWheelbaseColorPicker').eq(0).should('be.visible').click();

        cy.get('#ColorWheelbaseColorPicker').eq(0).should('have.attr', 'style', 'background: rgb(184, 255, 15); left: 383px; top: 289px;');
        cy.get('#ColorWheelColorPicker0').should('have.attr', 'style', 'visibility: visible; left: 526px; top: 821px; background: rgb(65, 152, 255);');
        cy.get('#ColorWheelColorPicker1').should('have.attr', 'style', 'visibility: visible; left: 915px; top: 432px; background: rgb(255, 83, 38);');

        cy.get('input[value="#b8ff0f"]').should('be.visible');
    })
  })