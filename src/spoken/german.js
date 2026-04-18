import { createSpokenNumeral } from './common.js';

const numbers = {
  negative: (n) => `minus ${n}`,
  decimal: (n, d) => `${n} Komma ${d}`,
  x: (n) => ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'][n],
  10: () => 'zehn',
  11: () => 'elf',
  12: () => 'zwölf',
  16: (o, t) => 'sech' + t,
  17: (o, t) => 'sieb' + t,
  1x: (o, t) => o + t,
  x0: (o, t) => o + 'ig',
  x1: (o, t) => 'einund' + t,
  2x: (o, t) => 'zwanz' + t,
  3x: (o, t) => 'dreiß' + t,
  6x: (o, t) => 'sech' + t,
  7x: (o, t) => 'sieb' + t,
  xx: (o, t) => `${o}und${t}`,
  100: () => 'hundert',
  x00: (o, t, h) => o + h,
  x0x: (o, t, h) => h + o,
  xxx: (o, t, h) => h + t,
  1000: () => 'tausend',
  big: (i) => {
    const abc = i % 2 ? 'illion' : 'illiarde';
    const bigN = ['m', 'b', 'tr', 'quadr', 'quint', 'sext', 'sept', 'oct', 'non', 'dec', 'undec', 'duodec', 'tredec', 'quattuordec', 'quindec', 'sedec']
    return bigN[abc];
  }
};


const words = {
  // or a regex?
};

export default createSpokenNumeral(words, numbers);

