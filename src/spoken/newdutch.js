import { createSpokenNumeral } from './common.js';

const numbers = {
  negative: (n) => `min ${n}`,
  decimal: (n, d) => `${n} komma ${d}`,
  x: (n) => ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen'][n],
  10: () => 'tien',
  11: () => 'elf',
  12: () => 'twaalf',
  13: (o, t) => 'der' + t,
  14: (o, t) => 'veer' + t,
  1x: (o, t) => o + t,
  x0: (o, t) => t + 'tig',
  2x: (o, t) => 'twin' + t,
  3x: (o, t) => 'der' + t,
  4x: (o, t) => 'veer' + t,
  8x: (o, t) => 'tach' + t,
  xx: (o, t) => `${o}en${t}`,
  x2: (o, t) => `${o}ën${t}`, // or only replace tens?
  x3: (o, t) => `${o}ën${t}`,
  100: () => 'honderd',
  x00: (o, t, h) => o + h,
  x0x: (o, t, h) => h + o, // nodig?
  xxx: (o, t, h) => h + t,
  1000: () => 'duizend',
  big: (i) => {
    const abc = i % 2 ? 'iljoen' : 'iljard';
    const bigN = ['m', 'b', 'tr', 'quadr', 'quint', 'sext', 'sept', 'oct', 'non', 'dec', 'undec', 'duodec', 'tredec', 'quattuordec', 'quindec', 'sedec']
    return bigN[abc];
  }
};


const words = {
  // or a regex?
};

/*
 * 555
 * 555 -> nothing
 * 5 -> nothing
 * ones ones ones
 * 50 -> nothing
 * x0 -> vijftig
 * xx -> vijfenvijftig
 * x00 -> vijfhonderd
 * xxx -> vijfhonderdvijfenvijftig
 *
 * xxx
 * 5xx
 * x5x
 * xx5
 * x55
 * 55x
 * 5x5
 * xx
 * x5
 * 5x
 * x
 *
 * 22
 * ones ones
 * 2x
 * x0
 * x2
 * xx
 */

  /*
  0: () => 'nul',
  1: () => 'één',
  2: () => 'twee',
  3: () => 'drie',
  4: () => 'vier',
  5: () => 'vijf',
  6: () => 'zes',
  7: () => 'zeven',
  8: () => 'acht',
  9: () => 'negen',
  */
export default createSpokenNumeral(words, numbers);

