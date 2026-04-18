import { createSpokenNumeral } from './common.js';

const numbers = {
  negative: (n) => `minus ${n}`,
  decimal: (n, d) => `${n} point ${d}`,
  x: (n) => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][n],
  10: () => 'ten',
  11: () => 'eleven',
  12: () => 'twelve',
  13: (o, t) => 'thir' + t,
  15: (o, t) => 'fif' + t,
  18: (o, t) => 'eigh' + t,
  1x: (o, t) => o + 'teen',
  x0: (o, t) => o + 'ty',
  2x: (o, t) => 'twen' + t,
  3x: (o, t) => 'thir' + t,
  5x: (o, t) => 'fif' + t,
  8x: (o, t) => 'eigh' + t,
  xx: (o, t) => `${t}${o}`,
  100: () => 'hundred',
  x00: (o, t, h) => o + h,
  x0x: (o, t, h) => h + o,
  xxx: (o, t, h) => h + t,
  1000: () => 'thousand',
  big: (i) => {
    const abc = 'illion';
    const bigN = ['m', 'b', 'tr', 'quadr', 'quint', 'sext', 'sept', 'oct', 'non', 'dec', 'undec', 'duodec', 'tredec', 'quattuordec', 'quindec', 'sedec']
    return bigN[abc];
  }
};


const words = {
  // or a regex?
};

export default createSpokenNumeral(words, numbers);

