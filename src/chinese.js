import { createNumeral } from './common.js';

const chinese = [
  ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
  ['', '十', '百', '千'],
  ['', '万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载'],
];
const chineseDot = '点';
const chineseNegative = '负';

const chineseTwo = '兩';
const decimal = 10;
const dot = '.';
const negative = '-';

function parseChinese(str) {
  return +[...str]
    .reduce((acc, x) => {
      const tenthousands = chinese[2].indexOf(x);
      console.log(acc);

      if (tenthousands !== -1) {
        console.log('tenthousands', acc, tenthousands);
        // acc.value -= acc.lastValue;
        acc.value += acc.value * (10_000 ** tenthousands);
        acc.lastValue = 0;
      }

      const tens = chinese[1].indexOf(x);

      if (tens !== -1) {
        console.log('tens', tens);
        const value = (acc.lastValue || 1) * 10 ** tens;
        acc.value -= acc.lastValue;
        acc.value += value;
        acc.lastValue = value;
      }

      const ones = x === chineseTwo ? 2 : chinese[0].indexOf(x);

      if (ones !== -1) {
        console.log('ones', ones);
        acc.value += ones;
        acc.lastValue = ones;
      }

      return acc;
    }, {
      value: 0,
      lastValue: 0,
    })
    .value;
}

function toChinese(n) {
  if (n < 10) return chinese[0][n];

  const stride = 4;
  const tensStride = 5; // remove

  return [...n.toString()]
    .reverse()
    .map((x, i) => {
      const y = i % tensStride;
      return x === '2' && y > 1 ? chineseTwo : chinese[0][x];
    })
    .map((x, i) => {
      const y = i % stride;
      const value = y > 0 && x === chinese[0][0]
        ? chinese[0][0]
        : i > 0 && y === 0
          ? chinese[2][i / stride | 0]
          : chinese[1][y];
      return `${x}${value}`;
    })
    .reverse()
    .join('')
    .replace(/^一十/g, '十')
    .replace(/零+/g, '零')
    .replace(/零+$/g, '')
    .replace(new RegExp(`零+([${chinese[2].slice(1).join('|')}])`, "g"), "$1")
    .replace(new RegExp(`([${chinese[2].slice(1).join('|')}]+)([${chinese[2].slice(1).join('|')}])`, "g"), "$1")
    ;
}

export default createNumeral(parseChinese, toChinese);
