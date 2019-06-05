const TEN = '↊';
const ELEVEN = '↋';
const flag = 'g';

export function parseDuodecimal(str, ten = TEN, eleven = ELEVEN) {
  const duodecimal = str.replace(new RegExp(ten, flag), 'a').replace(new RegExp(eleven, flag), 'b');
  return parseInt(duodecimal, 12);
}
export function toDuodecimal(n, ten = TEN, eleven = ELEVEN) {
  return n
    .toString(12)
    .replace(/a/g, ten)
    .replace(/b/g, eleven);
}
