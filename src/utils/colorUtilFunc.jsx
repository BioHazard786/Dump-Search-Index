function sumRGB(color) {
  let sum = 0;
  for (let i of color) {
    sum += parseInt(color);
  }
  return sum;
}

function compDarkRGB(c1, c2) {
  let color1 = c1.slice(4, -1).split(",");
  let color2 = c2.slice(4, -1).split(",");
  let diff = sumRGB(color1) - sumRGB(color2);
  if (diff < 0) {
    return c1;
  } else {
    return c2;
  }
}

function compLightRGB(c1, c2) {
  let color1 = c1.slice(4, -1).split(",");
  let color2 = c2.slice(4, -1).split(",");
  let diff = sumRGB(color1) - sumRGB(color2);
  if (diff > 0) {
    return c1;
  } else {
    return c2;
  }
}

export { compDarkRGB, compLightRGB };
