const cartesianToPolar = (x, y, degree) => {
  const r = Math.sqrt(x*x + y*y);
  const o = ((Math.atan2(y, x)* (180/Math.PI))+degree)%360;
  return [r, o]
}

const polarToCartesian = (r, o) => {
  const newX = r * Math.cos(o * (Math.PI/180));
  const newY = r * Math.sin(o * (Math.PI/180));
  return [newX, newY, '']
}

const complementary = (x, y) => {
  const point = [polarToCartesian(cartesianToPolar(x, y, 180)[0], cartesianToPolar(x, y, 180)[1])];
  return point
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


const analagous = (x, y) => {
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
  return [[newX1, newY1, ''], [newX2, newY2, '']]

}

module.exports = {
  complementary,
  square,
  triadic,
  isosceles,
  tetradic,
  analagous,
  davidStar,
  monochrome
}