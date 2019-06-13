const duodecimal = 12;
const TEN = '↊';
const ELEVEN = '↋';
const flag = 'g';

export function parseDuodecimal(str, ten = TEN, eleven = ELEVEN) {
  return parseInt(str.replace(new RegExp(ten, flag), 'a').replace(new RegExp(eleven, flag), 'b'), duodecimal);
}
export function toDuodecimal(n, ten = TEN, eleven = ELEVEN) {
  return (+n)
    .toString(duodecimal)
    .replace(/a/g, ten)
    .replace(/b/g, eleven);
}
