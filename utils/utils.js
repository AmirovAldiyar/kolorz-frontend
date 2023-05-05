const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const hexToHsl = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;

  if(max === min){
      h = s = 0; // achromatic
  } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }

  s = s*100;
  s = Math.round(s);
  l = l*100;
  l = Math.round(l);
  h = Math.round(360*h);

  return [h, s, l]
}

const complementary = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+180)%360), hsl[1], hsl[2])]
}

const triadic = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+120)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+240)%360), hsl[1], hsl[2])]
}

const isosceles = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+150)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+210)%360), hsl[1], hsl[2])]
}

const square = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+90)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+180)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+270)%360), hsl[1], hsl[2])]
}

const tetradic = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+60)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+180)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+240)%360), hsl[1], hsl[2])]
}

const analagous = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+30)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+330)%360), hsl[1], hsl[2])]
}

const davidStar = (hex) => {
  const hsl = hexToHsl(hex)
  return [hex, hslToHex(Math.abs((hsl[0]+60)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+120)%360), hsl[1], hsl[2]), hslToHex(Math.abs((hsl[0]+180)%360), hsl[1], hsl[2])]
}

module.exports = {
  hslToHex,
  hexToHsl,
  complementary,
  square,
  analagous,
  triadic,
  tetradic,
  davidStar,
  isosceles
}