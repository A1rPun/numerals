import {
  abjad,
  aegean,
  // arabicEast,
  armenian,
  asian,
  // asianFormal,
  attic,
  babylonian,
  bijective,
  braille,
  chuvash,
  countingRod,
  cyrillic,
  duodecimal,
  egyptian,
  etruscan,
  geez,
  georgian,
  glagolitic,
  greek,
  greekModern,
  hebrew,
  kharosthi,
  maya,
  phoenician,
  roman,
  tallyMarks,
  tallyMarksChinese,
} from './numerals.js';

const input = (typeof process !== 'undefined' && process.argv[2]) || 29;
const log = (name, result) => console.log(name.padEnd(15), result);

log('Abjad', abjad.to(input));
log('Aegean', aegean.to(input));
// log('Arabic', arabicEast.to(input));
log('Armenian', armenian.to(input));
log('Asian Eastern', asian.to(input));
// log('Asian Formal', asianFormal.to(input));
log('Attic', attic.to(input));
log('Babylonian', babylonian.to(input));
log('Bijective', bijective.to(input));
log('Braille', braille.to(input));
log('Chuvash', chuvash.to(input));
log('Counting Rod', countingRod.to(input));
log('Cyrillic', cyrillic.to(input));
log('Duodecimal', duodecimal.to(input));
log('Egyptian', egyptian.to(input));
log('Etruscan', etruscan.to(input));
log('Geez', geez.to(input));
log('Georgian', georgian.to(input));
log('Glagolitic', glagolitic.to(input));
log('Greek', greek.to(input));
log('Greek Modern', greekModern.to(input));
log('Hebrew', hebrew.to(input));
log('Kharosthi', kharosthi.to(input));
log('Maya', maya.to(input));
log('Phoenician', phoenician.to(input));
log('Roman', roman.to(input));
log('Tally marks', input < 100 ? tallyMarks.to(input) : 'Too big');
log('Chinese Tally marks', input < 100 ? tallyMarksChinese.to(input) : 'Too big');
