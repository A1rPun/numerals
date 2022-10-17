export function createAlphabeticNumeral(numerals, toFn) {
  const parse = (str) => {
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
  };
  const to = (n) => {
    return n
      .toString()
      .split('')
      .reverse()
      .reduce(
        (acc, x, i) => (i < numerals.length ? numerals[i][x] : toFn ? toFn(x, i) : '') + acc,
        ''
      );
  };

  return createNumeral(parse, to);
}

export function createNumeral(parseFn, toFn) {
  return {
    parse: parseFn,
    to: toFn,
  };
}

export function toBase(n, base = 10) {
  return n.toString(base).toUpperCase();
}
export function parseBase(str, base = 10) {
  return parseFloat(str, base);
}
// TODO: refactor
export function normalizeString(str, ...surrogates) {
  if (!surrogates.length) return str.split('');
  const fromSurrogate = (charCode, surrogate) =>
    charCode > surrogate ? String.fromCharCode(surrogate, charCode) : String.fromCharCode(charCode);
  const charCodes = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const surrogate = surrogates.findIndex(x => x === charCode);
    if (surrogate === -1) {
      charCodes.push(String.fromCharCode(charCode));
      continue;
    }
    charCodes.push(fromSurrogate(str.charCodeAt(++i), charCode));
  }
  return charCodes;
}
