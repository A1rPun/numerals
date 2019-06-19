const maya = ['', '⠂', '⡁', '⠇', '⡇'];
const mayaZero = '⭖';
const rod = '|';
const rodNumeral = 5;
const vigesimal = 20;

function to(n) {
  return rod.repeat(Math.floor(n / rodNumeral)) + (n ? maya[n % rodNumeral] : mayaZero);
}

export function parseMaya(str) {
  return str
    .split(' ')
    .reverse()
    .reduce(
      (acc, x, i) =>
        acc +
        (x === mayaZero
          ? 0
          : x.split('').reduce((a, y) => a + (y === rod ? rodNumeral : maya.indexOf(y)), 0) *
            (i ? vigesimal ** i : 1)),
      0
    );
}
export function toMaya(n) {
  return (n >= vigesimal ? `${toMaya(Math.floor(n / vigesimal))} ` : '') + to(n % vigesimal);
}
