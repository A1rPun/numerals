import { createNumeral } from './common.js';

const asian = [
  ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
  ['拾', '佰', '仟', '萬', '億', '兆', '京', '垓', '秭', '穰', '溝', '澗', '正', '載'],
];
const asianDot = '點'; // ?
const asianNegative = '負'; // ?
const asianZero = asian[0][0];
const decimal = 10;
const dot = '.';
const negative = '-';

// export default createNumeral(parseAsianFormal, toAsianFormal);
