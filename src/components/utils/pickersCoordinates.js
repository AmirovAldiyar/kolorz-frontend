function cartesianToPolar(x, y, degree)
{
  const r = Math.sqrt(x*x + y*y);
  const o = ((Math.atan2(y, x)* (180/Math.PI))+degree)%360;
  return [r, o]
}

const polarToCartesian = (r, o) => {
  const newX = r * Math.cos(o * (Math.PI/180));
  const newY = r * Math.sin(o * (Math.PI/180));
  return [newX, newY]
}

const complementary = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 180)[1])];
}

const square = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 270)[0], cartesianToPolar(x, y, 270)[1]), 
          polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 180)[1]),
          polarToCartesian(cartesianToPolar(x, y, 90)[0], cartesianToPolar(x, y, 90)[1]),
         ]
}

const triadic = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 240)[0], cartesianToPolar(x, y, 240)[1]), 
          polarToCartesian(cartesianToPolar(x, y, 120)[0], cartesianToPolar(x, y, 120)[1])
         ]
}

const isosceles = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 210)[0], cartesianToPolar(x, y, 210)[1]), 
          polarToCartesian(cartesianToPolar(x, y, 150)[0], cartesianToPolar(x, y, 150)[1]),
         ]
}

const tetradic = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 240)[0], cartesianToPolar(x, y, 240)[1]), 
          polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 180)[1]),
          polarToCartesian(cartesianToPolar(x, y, 60)[0], cartesianToPolar(x, y, 60)[1]),
         ]
}

const analogous = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 240)[0], cartesianToPolar(x, y, 330)[1]), 
          polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 30)[1]),
         ]
}

const davidStar = (x, y) => {
  return [polarToCartesian(cartesianToPolar(x, y, 120)[0], cartesianToPolar(x, y, 180)[1]), 
          polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 120)[1]),
          polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 60)[1]),
         ]
}

const monochrome = (x, y) => {
  const r = Math.sqrt(x*x + y*y);
  const o = (Math.atan2(y, x)* (180/Math.PI))%360;
  const newX1 = r*0.75 * Math.cos(o * (Math.PI/180));
  const newY1 = r*0.75 * Math.sin(o * (Math.PI/180));
  const newX2 = r*0.5 * Math.cos(o * (Math.PI/180));
  const newY2 = r*0.5 * Math.sin(o * (Math.PI/180));
  return [[newX1, newY1], [newX2, newY2]]

}

const rgbToHexB = (r, g, b, saturation) => {
  r = r - (r * (1 - saturation));
  g = g - (g * (1 - saturation));
  b = b - (b * (1 - saturation));
  return ((r << 16) | (g << 8) | b).toString(16);
}

const takeColorFromWheel = (x, y, saturationValue, canvas) => {
  const HALF_OF_COLOR_PICKER_SIZE = 20
  let x_in_canvas = x - canvas.offsetLeft + HALF_OF_COLOR_PICKER_SIZE + 2;
  let y_in_canvas = y - canvas.offsetTop + HALF_OF_COLOR_PICKER_SIZE + 1;
  let canvas_pixel = canvas.getContext('2d').getImageData(x_in_canvas * 150 / 360, y_in_canvas * 70 / 350, 1, 1).data;
  return "#" + ("000000" + rgbToHexB(canvas_pixel[0], canvas_pixel[1], canvas_pixel[2], saturationValue)).slice(-6);
}

const colorListFromArray = (arr, sbv, canvas, canvas_div) => {
  const colors = [];
  for (let j = 0; j < (arr.length); j++) {
      let x = Math.round(arr[j][0] + 680/2) +  canvas_div.offsetLeft -10;
      let y = Math.round(arr[j][1] + 680/2) + canvas_div.offsetTop -20;
      const hex = takeColorFromWheel(x, y, sbv, canvas);
      colors.push({
          id: 'ColorPicker' + j.toString(),
          color: hex,
          x: x,
          y: y,
          sbv: sbv
      });
  }
  return colors;
}

const colorListForSelectedMode = (mode, x, y, sbv, canvas, canvas_div) => {

  let p = [];
  let arr = [];
  x = x - canvas_div.offsetLeft+10 - 680/2;
  y = y - canvas_div.offsetTop +20 - 680/2;

  switch (mode) {
      case 'complementary': {
          arr = complementary(x, y);
          break;
      }
      case 'square':  {
          arr = square(x, y);
          break;
      }
      case 'triadic': {
          arr = triadic(x, y)
          break;
      }
      case 'isosceles': {
          arr = isosceles(x, y)
          break;
      }
      case 'tetradic': {
          arr = tetradic(x, y)
          break;
      }
      case 'analogous': {
          arr = analogous(x, y)
          break;
      }
      case 'david star': {
          arr = davidStar(x, y)
          break;
      }
      case 'monochram': {
          arr = monochrome(x, y)
          break;
      }
  }
  
  p = colorListFromArray(arr, sbv, canvas, canvas_div);
  return p;
}

function hexToRgb(hex, saturation) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return rgbToHexB(r, g, b, saturation);
}

function hexWithSaturation(hex, saturation) {
  return "#" + ("000000" + (hexToRgb(hex.slice(1,hex.lenght), saturation))).slice(-6);
}

module.exports = {
  cartesianToPolar,
  polarToCartesian,
  complementary,
  rgbToHexB,
  square,
  triadic,
  isosceles,
  tetradic,
  analogous,
  davidStar,
  monochrome,
  takeColorFromWheel,
  colorListFromArray,
  colorListForSelectedMode,
  hexWithSaturation,
}