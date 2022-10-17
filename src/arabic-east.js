import { createNumeral } from './common.js';

const numerals = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹'];

export default createNumeral(
  str => {
    return +str
      .split('')
      .map(x => (x === negative || x === dot ? x : numerals.indexOf(x)))
      .join('');
  },
  n => {
    return n
      .toString()
      .split('')
      .map(x => (x === negative || x === dot ? x : numerals[x]))
      .join('');
  }
);
