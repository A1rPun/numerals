import { createNumeral } from './common.js';

const maya = ['', '⠂', '⡁', '⠇', '⡇'];
const mayaZero = '⭖';
const rod = '|';
const rodNumeral = 5;
const vigesimal = 20;

function to(n) {
  return rod.repeat(Math.floor(n / rodNumeral)) + (n ? maya[n % rodNumeral] : mayaZero);
}

function parseMaya(str) {
  return str
    .split(' ')
    .reverse()
    .reduce(
      (acc, x, i) =>
        acc +
        (x === mayaZero
          ? 0
          : [...x].reduce((a, y) => a + (y === rod ? rodNumeral : maya.indexOf(y)), 0) *
            (i ? vigesimal ** i : 1)),
      0
    );
}
function toMaya(n) {
  return (n >= vigesimal ? `${toMaya(Math.floor(n / vigesimal))} ` : '') + to(n % vigesimal);
}

export default createNumeral(parseMaya, toMaya);
