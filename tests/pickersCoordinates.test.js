const pickersCoordinates = require('../src/components/utils/pickersCoordinates.js');

describe('testing pickersCoordinates utils', () => {
  test('cartesianToPolar', () => {
    const result = pickersCoordinates.cartesianToPolar(40,30,120);
    expect(result).toStrictEqual([50, 156.86989764584402]);
  });
});

describe('testing pickersCoordinates utils', () => {
  test('polarToCartesian', () => {
    const result = pickersCoordinates.polarToCartesian(2, 10);
    expect(result).toStrictEqual([1.969615506024416, 0.34729635533386066]);
  });
});

describe('testing pickersCoordinates utils', () => {
  test('complementary', () => {
    const result = pickersCoordinates.complementary(40,30);
    expect(result.toString()).toStrictEqual('-40.00000000000001,-29.99999999999999');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('square', () => {
    const result = pickersCoordinates.square(40,30);
    expect(result.toString()).toStrictEqual('30.00000000000002,-39.99999999999998,-40.00000000000001,-29.99999999999999,-29.999999999999993,40.00000000000001');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('triadic', () => {
    const result = pickersCoordinates.triadic(40,30);
    expect(result.toString()).toStrictEqual('5.980762113533174,-49.64101615137754,-45.98076211353316,19.641016151377542');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('isosceles', () => {
    const result = pickersCoordinates.isosceles(40,30);
    expect(result.toString()).toStrictEqual('-19.641016151377542,-45.98076211353316,-49.64101615137755,-5.980762113533156');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('tetradic', () => {
    const result = pickersCoordinates.tetradic(40,30);
    expect(result.toString()).toStrictEqual('5.980762113533174,-49.64101615137754,-40.00000000000001,-29.99999999999999,-5.980762113533158,49.64101615137755');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('analogous', () => {
    const result = pickersCoordinates.analogous(40,30);
    expect(result.toString()).toStrictEqual('49.64101615137754,5.980762113533182,19.64101615137755,45.98076211353316');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('davidStar', () => {
    const result = pickersCoordinates.davidStar(40,30);
    expect(result.toString()).toStrictEqual('-40.00000000000001,-29.99999999999999,-45.98076211353316,19.641016151377542,-5.980762113533158,49.64101615137755');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('monochrome', () => {
    const result = pickersCoordinates.monochrome(40,30);
    expect(result.toString()).toStrictEqual('30,22.5,20,15');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('rgbToHexB', () => {
    const result = pickersCoordinates.rgbToHexB(125, 125, 125, 0.5);
    expect(result.toString()).toStrictEqual('3e3e3e');
  });
});

describe('testing pickersCoordinates utils', () => {
  test('hexWithSaturation', () => {
    const result = pickersCoordinates.hexWithSaturation([215, 125, 156], 0.55);
    expect(result.toString()).toStrictEqual('#000014');
  });
});

