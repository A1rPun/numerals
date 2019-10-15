const numerals = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹'];

export default {
  parseArabic(str) {
    return +str
      .split('')
      .map(x => (x === negative || x === dot ? x : numerals.indexOf(x)))
      .join('');
  },
  toArabic(n) {
    return n
      .toString()
      .split('')
      .map(x => (x === negative || x === dot ? x : numerals[x]))
      .join('');
  },
};
