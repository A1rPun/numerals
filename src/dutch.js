import { createNumeral } from './common.js';

const numbers = [
  ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen'],
  ['tien', 'elf', 'twaalf', 'dertien', 'veertien'],
  ['tig', 'twintig', 'dertig', 'veertig', 'tachtig'],
  ['honderd', 'duizend'],
  ['iljoen', 'iljard', 'm', 'b', 'tr', 'quadr', 'quint', 'sext', 'sept', 'oct', 'non', 'dec', 'undec', 'duodec', 'tredec', 'quattuordec', 'quindec', 'sedec']
];

const negative = 'min';
const divider = 'komma';
const andParticle = ['en', 'ën'];

function toDutch(n) {
  const negativeN = n < 0;
  let result = [];

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
  const ones = numbers[0].indexOf(str);

  return ones; 
}

function toDutchPart(n, pos) {
  let result = '';

  if (pos > 0 && n != 0) {
    result = pos > 1
      ? ` ${numbers[4][Math.floor(pos / 2) + 1]}${numbers[4][pos % 2]}`
      : numbers[3][1];
  }

  let ones = numbers[0][n[0]];

  if (n.length === 1 || (n[1] === '0' && n[0] !== '0')) {
    result = `${result && n[0] === '1' ? '' : ones}${result}`;
  } else if (n[1] === '1') {
    const tens = n[0] < 5
      ? numbers[1][n[0]]
      : `${ones}${numbers[1][0]}`;
    result = `${tens}${result}`;
  } else if (n[1] !== '0') {
    const tens = n[1] < 5
      ? numbers[2][n[1] - 1]
      : n[1] === '8'
        ? numbers[2][4]
        : `${numbers[0][n[1]]}${numbers[2][0]}`;
    if (n[0] === '0') { 
      result = `${tens}${result}`;
    } else {
      const and = n[0] === '2' || n[0] === '3'
        ? andParticle[1]
        : andParticle[0];
      result = `${ones}${and}${tens}${result}`;
    }
  }

  if (n[2] && n[2] !== '0') {
    const hundreds = n[2] === '1' ? '' : numbers[0][n[2]];
    result = `${hundreds}${numbers[3][0]}${result}`;
  }
  return result.trim();
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

