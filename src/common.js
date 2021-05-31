export function createAlphabeticNumeral(numerals, toFn) {
  return {
    parse(str) {
      const numeralsDict = numerals.reduce(
        (acc, x, i) => {
          return x.reduce((acc, y, j) => {
            acc[y] = j * (i ? 10 ** i : 1);
            return acc;
          }, acc);
        },
        toFn ? { [toFn(1)]: 10 ** numerals.length } : {}
      );
      return str.split('').reduce((acc, x) => acc + (numeralsDict[x] || 0), 0);
    },
    to(n) {
      return n
        .toString()
        .split('')
        .reverse()
        .reduce(
          (acc, x, i) => (i < numerals.length ? numerals[i][x] : toFn ? toFn(x, i) : '') + acc,
          ''
        );
    },
  };
}

export function toBase(n, base = 10) {
  return n.toString(base).toUpperCase();
}
export function parseBase(str, base = 10) {
  return parseFloat(str, base);
}

export function normalizeString(str, surrogate) {
  if (!surrogate) return str.split('');
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
