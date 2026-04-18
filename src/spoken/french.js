import { createSpokenNumeral } from './common.js';

const numbers = {
  negative: (n) => `moins ${n}`,
  decimal: (n, d) => `${n} virgule ${d}`,
  x: (n) => ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'][n],
  10: () => 'dix',
  11: () => 'onze',
  12: () => 'douze',
  13: () => 'treize',
  14: () => 'quatorze',
  15: () => 'quinze',
  16: () => 'seize',
  1x: (o, t) => `${t}-${o}`,
  20: (o, t) => 'vingt',
  30: (o, t) => 'trente',
  40: (o, t) => 'quarante',
  50: (o, t) => 'cinquante',
  60: (o, t) => 'soixante',
  70: (o, t) => 'soixante-dix', //septante
  //71: (o, t) => 'soixante-et-onze',
  80: (o, t) => 'quatre-vingts', //huitante
  8x: (o, t) => `quatre-vingt-${o}`,
  90: (o, t) => 'quatre-vingt-dix', //nonante
  //91: (o, t) => 'quatre-vingt-onze',
  xx: (o, t) => `${t}-${o}`,
  x1: (o, t) => `${t} et ${o}`, //no et above 80
  100: () => 'cent',
  x00: (o, t, h) => `${o}-${h}s`,
  x0x: (o, t, h) => h + o,
  xxx: (o, t, h) => h + t,
  1000: () => 'mille',
  big: (i) => {
    const abc = i % 2 ? 'illion' : 'illiard';
    const bigN = ['m', 'b', 'tr', 'quadr', 'quint', 'sext', 'sept', 'oct', 'non', 'dec', 'undec', 'duodec', 'tredec', 'quattuordec', 'quindec', 'sedec']
    return bigN[abc];
  }
};


const words = {
  // or a regex?
};

export default createSpokenNumeral(words, numbers);

