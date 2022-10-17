import { createNumeral } from './common.js';

const asian = [
  ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
  // TODO: Fill gaps after 10^4 with powers of 4
  ['', '十', '百', '千', '万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载'], // 10 - 10^44
];
const asianDot = '点';
const asianNegative = '负';
const asianZero = asian[0][0];
const decimal = 10;
const dot = '.';
const negative = '-';

function to(n, i) {
  return n === '0' ? '' : asian[0][n] + asian[1][i];
}

function parseAsian(str) {
  throw Error('Not implemented');
  return +str
    .split('')
    .map(x => (x === asianNegative || x === dot ? x : asian[0].indexOf(x)))
    .join('');
}
function toAsian(n) {
  if (!n) return asianZero;
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => to(x, i) + acc, '');
}

export default createNumeral(parseAsian, toAsian);
