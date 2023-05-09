const pickersCoordinates = require('../../src/components/utils/pickersCoordinates.js');

it('cartesianToPolar', () => {
    expect(pickersCoordinates.cartesianToPolar(40,30,120)[0] === 50);
    expect(pickersCoordinates.cartesianToPolar(40,30,120)[1] === 156.86989764584402);
  })

describe('pickersCoordinates utils', () => {
  it('takeColorFromWheel', () => {
    let canvas = document.createElement('canvas');
    canvas.setAttribute('offsetLeft', 100);
    canvas.setAttribute('offsetTop', 100);
    HTMLCanvasElement.prototype.getContext = () => { 
      return canvas
    };

    HTMLCanvasElement.prototype.getImageData = (x, y, c, d) => { 
      return {data: {canvas_pixel: [124, 125, 145]}}
    };

    const hex = pickersCoordinates.takeColorFromWheel(100, 100, 1, canvas);
    expect(hex === "#000000");
  });
});


describe('testing pickersCoordinates utils', () => {
  it('colorListFromArray', () => {
    let canvas = document.createElement('canvas');
    let canvasDiv = document.createElement('div');
    canvasDiv.appendChild(canvas);

    const result = pickersCoordinates.colorListFromArray([[200, 200]], 0.5, canvas, canvasDiv);
    expect(result.id === "ColorPicker0");
    expect(result.color === "#000000");
    expect(result.x === 530);
    expect(result.y === 520);
    expect(result.sbv === 0.5);
  });
});

describe('testing pickersCoordinates utils', () => {
  it('colorListForSelectedMode', () => {
    let canvas = document.createElement('canvas');
    let canvasDiv = document.createElement('div');
    canvasDiv.appendChild(canvas);

    const result = pickersCoordinates.colorListForSelectedMode('complementary', 200, 200, 0.5, canvas, canvasDiv);
    expect(result.id === "ColorPicker0");
    expect(result.color === "#000000");
    expect(result.x === 460);
    expect(result.y === 440);
    expect(result.sbv === 0.5);
  });
});
