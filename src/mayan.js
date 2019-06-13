const mayan = ['', '⠂', '⡁', '⠇', '⡇'];
const mayanZero = '⭖';
const rod = '|';
const rodNumeral = 5;
const vigesimal = 20;

function to(n) {
  return rod.repeat(Math.floor(n / rodNumeral)) + (n ? mayan[n % rodNumeral] : mayanZero);
}

export function parseMayan(str) {
  return str
    .split(' ')
    .reverse()
    .reduce(
      (acc, x, i) =>
        acc +
        (x === mayanZero
          ? 0
          : x.split('').reduce((a, y) => a + (y === rod ? rodNumeral : mayan.indexOf(y)), 0) *
            (i ? vigesimal ** i : 1)),
      0
    );
}
export function toMayan(n) {
  return (n >= vigesimal ? `${toMayan(Math.floor(n / vigesimal))} ` : '') + to(n % vigesimal);
}
