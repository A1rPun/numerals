export function parseTallyMarks(str) {
  throw Error('Not implemented');
}
export function toTallyMarks(n) {
  let marks = '';
  for (let i = 1; i <= n; i++) {
    marks += i % 5 === 0 ? '\u0338' : '\u007C';
  }
  return marks;
}
