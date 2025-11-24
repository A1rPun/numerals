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
    return [...str].reduce((acc, x) => acc + (numeralsDict[x] || 0), 0);
  };
  const to = (n) => {
    return [...n.toString()]
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
