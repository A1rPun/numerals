export function parseTallyMarks(str) {
  const [last, ...parts] = str.split('/').reverse();
  return parts.length * 5 + last.length;
}

export function toTallyMarks(n) {
  return Array.from(Array(+n), (_, i) => ++i % 5 ? '|' : '/').join('');
}
