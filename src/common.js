export function createNumeral(numerals) {
  return {
    parse(str) {
      return +str
        .split('')
        .map(x => numerals.indexOf(x))
        .join('');
    },
    to(n) {
      return n
        .toString()
        .split('')
        .map(x => numerals[x])
        .join('');
    },
  };
}
