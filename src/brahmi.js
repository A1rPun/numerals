const brahmi = [
  ['', '𑁒', '𑁓', '𑁔', '𑁕', '𑁖', '𑁗', '𑁘', '𑁙', '𑁚'], // ones
  ['', '𑁛', '𑁜', '𑁝', '𑁞', '𑁟', '𑁠', '𑁡', '𑁢', '𑁣'], // tens
  ['', '𑁤', 'H', '𑁤H', 'HH', '𑁤HH', 'HHH', '𑁤HHH', 'HHHH', '𑁤HHHH'], // hundreds
];

export function parseBrahmi(str) {
  throw Error('Not implemented');
}
export function toBrahmi(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, x, i) => (i < brahmi.length ? brahmi[i][x] : '𑁥'.repeat(x)) + acc, '');
}

// export * from './src/brahmi.js';
// log('Brahmi', toBrahmi(input));
