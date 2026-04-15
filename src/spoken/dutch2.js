import { createNumeral } from './common.js';

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
  x0: (o, t) => o + 'tig',
  2x: (o, t) => 'twin' + t,
  3x: (o, t) => 'der' + t,
  4x: (o, t) => 'veer' + t,
  8x: (o, t) => 'tach' + t,
  xx: (o, t) => `${o}en${t}`,
  x2: (o, t) => `${o}ën${t}`, // or only replace tens?
  x3: (o, t) => `${o}ën${t}`,
  //1xx: () => 'honderd',
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
function toDutch(n) {
  const negativeN = n < 0;

  if (negativeN) {
    result.push(negative);
    n = n * -1; // math.abs
  }
  const numberParts = n.toString().split('.');
  const number = chunk(numberParts[0])
    .map(toDutchPart)
    .filter(x => x)
    .reverse();
  result = result.concat(number);

  if (numberParts.length > 1) {
    result.push(divider);
    const decimals = [...numberParts[1]]
      .map(x => numbers[0][x]);
    result = result.concat(decimals);
  }

  return result.join(' ');
}

function parseDutch(str) {
  return 0; 
}

function toDutchPart(n, pos) {
}

function chunk(source, size = 3) {
  let chunks = [];
  let chunk = '';
  let count = 0;

  for (let i = source.length; i--;) {
    chunk += source[i];
    count++;

    if (size === count) {
      chunks.push(chunk);
      count = 0;
      chunk = '';
    }
  }

  if (chunk.length) chunks.push(chunk);
  return chunks;
}

export default createNumeral(parseDutch, toDutch);

