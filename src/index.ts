import color from 'color';

// based on http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
var hue = Math.random();
const goldenRatio = 0.618033988749895;

export default function (
  saturation?: number,
  value?: number
): color {
  hue += goldenRatio;
  hue %= 1;

  if (typeof saturation !== 'number') saturation = 0.5;

  if (typeof value !== 'number') value = 0.95;

  return color({
    h: hue * 360,
    s: saturation * 100,
    v: value * 100,
  });
}
