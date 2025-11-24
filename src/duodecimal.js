import { createNumeral } from './common.js';

const duodecimal = 12;
const TEN = '↊';
const ELEVEN = '↋';
const flag = 'g';

function parseDuodecimal(str, ten = TEN, eleven = ELEVEN) {
  return parseInt(str.replace(new RegExp(ten, flag), 'a').replace(new RegExp(eleven, flag), 'b'), duodecimal);
}

function toDuodecimal(n, ten = TEN, eleven = ELEVEN) {
  return (+n)
    .toString(duodecimal)
    .replace(/a/g, ten)
    .replace(/b/g, eleven);
}

export default createNumeral(parseDuodecimal, toDuodecimal);
