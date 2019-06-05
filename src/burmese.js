import { parseNumeral, toNumeral } from './common';

const burmeseNumerals = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

export function parseBurmese(str) {
  return parseNumeral(str, burmeseNumerals);
}
export function toBurmese(n) {
  return toNumeral(n, burmeseNumerals);
}
