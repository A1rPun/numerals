export function createNumeral(numerals, negative = '-', dot = '.') {
  return {
    parse(str) {
      return +str
        .split('')
        .map(x => (x === negative || x === dot ? x : numerals.indexOf(x)))
        .join('');
    },
    to(n) {
      return n
        .toString()
        .split('')
        .map(x => (x === negative || x === dot ? x : numerals[x]))
        .join('');
    },
  };
}

export function toBase(n, base = 10) {
  return n.toString(base).toUpperCase();
}
export function parseBase(str, base = 10) {
  return parseInt(str, base);
}

export function normalizeString(str, surrogate) {
  const charCodes = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode === surrogate) continue;
    charCodes.push(
      charCode > surrogate
        ? String.fromCharCode(surrogate, charCode)
        : String.fromCharCode(charCode)
    );
  }
  return charCodes;
}
