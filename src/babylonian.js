// const babylonian = [
//   ' ', '𒐕', '𒐖', '𒐈', '𒐉', '𒐊', '𒐋', '𒑂', '𒑄', '𒑆',
//   '𒌋', '𒌋𒐕', '𒌋𒐖', '𒌋𒐈', '𒌋𒐉', '𒌋𒐊', '𒌋𒐋', '𒌋𒑂', '𒌋𒑄', '𒌋𒑆',
//   '𒎙', '𒎙𒐕', '𒎙𒐖', '𒎙𒐈', '𒎙𒐉', '𒎙𒐊', '𒎙𒐋', '𒎙𒑂', '𒎙𒑄', '𒎙𒑆',
//   '𒌍', '𒌍𒐕', '𒌍𒐖', '𒌍𒐈', '𒌍𒐉', '𒌍𒐊', '𒌍𒐋', '𒌍𒑂', '𒌍𒑄', '𒌍𒑆',
//   '𒑩', '𒑩𒐕', '𒑩𒐖', '𒑩𒐈', '𒑩𒐉', '𒑩𒐊', '𒑩𒐋', '𒑩𒑂', '𒑩𒑄', '𒑩𒑆',
//   '𒑪', '𒑪𒐕', '𒑪𒐖', '𒑪𒐈', '𒑪𒐉', '𒑪𒐊', '𒑪𒐋', '𒑪𒑂', '𒑪𒑄', '𒑪𒑆',
// ];
// export function toBabylonian(n) {
//   return (n > 59 ? toBabylonian(Math.floor(n / 60)) : '') + babylonian[n];
// }
// export function parseBabylonian(str) {
//   return str
//     .split('')
//     .reverse()
//     .reduce((acc, x, i) => acc + babylonian.indexOf(x) * ((i + 1) * 60), 0);
// }
// function parseBaby(str) {
//   return baby.reduce((acc, x, i) => {
//     const char = x.indexOf(x.find(y => y && ~str.indexOf(y)) || '');
//     return (char ? (i ? 10 * char : char) : 0) + acc;
//   }, 0);
// }

const baby = [['', '𒐕', '𒐖', '𒐈', '𒐉', '𒐊', '𒐋', '𒑂', '𒑄', '𒑆'], ['', '𒌋', '𒎙', '𒌍', '𒑩', '𒑪']];
const zero = ' ';

function toBaby(n) {
  return n
    ? n
        .toString()
        .split('')
        .reverse()
        .reduce((acc, x, i) => baby[i][x] + acc, '')
    : zero;
}

export function parseBabylonian(str) {
  throw Error('Not implemented');
}
export function toBabylonian(n) {
  return (n > 59 ? toBabylonian(Math.floor(n / 60)) : '') + toBaby(n % 60);
}
