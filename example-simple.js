import {
  adlam,
  ahom,
  arabicIndic,
  balinese,
  bengali,
  bhaisuki,
  chakma,
  cham,
  devanagari,
  extendedArabicIndic,
  fullWidth,
  gujarati,
  gunjalaGondi,
  gurmukhi,
  hanifiRohingya,
  javanese,
  kannada,
  kayahLi,
  khmer,
  khudawadi,
  lao,
  lepcha,
  limbu,
  malayam,
  masaramGondi,
  mathematicalBold,
  mathematicalDoubleStruck,
  mathematicalMonospace,
  mathematicalSansSerif,
  mathematicalSansSerifBold,
  meeteiMayek,
  modi,
  mongolian,
  mro,
  myanmar,
  myanmarShan,
  myanmarTaiLaing,
  newTaiLue,
  newa,
  nko,
  nyiakengPuachueHmong,
  olChiki,
  oriya,
  osmanya,
  pahawhHmong,
  saurashtra,
  sharada,
  sinhalaLith,
  soraSompeng,
  sundanese,
  taiThamHora,
  taiThamTham,
  takri,
  tamil,
  telugu,
  thai,
  tibetan,
  trihuta,
  vai,
  wancho,
  warangCiti,
} from './numerals.js';

const input = (typeof process !== 'undefined' && process.argv[2]) || 29;
const log = (name, result) => console.log(name.padEnd(15), result);

log('Bold', mathematicalBold.to(input));
log('Double Struck', mathematicalDoubleStruck.to(input));
log('Monospace', mathematicalMonospace.to(input));
log('Sans Serif Bold', mathematicalSansSerifBold.to(input));
log('Sans Serif', mathematicalSansSerif.to(input));
log('adlam', adlam.to(input));
log('ahom', ahom.to(input));
log('arabicIndic', arabicIndic.to(input));
log('balinese', balinese.to(input));
log('bengali', bengali.to(input));
log('bhaisuki', bhaisuki.to(input));
log('chakma', chakma.to(input));
log('cham', cham.to(input));
log('devanagari', devanagari.to(input));
log('extendedArabicIndic', extendedArabicIndic.to(input));
log('fullWidth', fullWidth.to(input));
log('gujarati', gujarati.to(input));
log('gunjalaGondi', gunjalaGondi.to(input));
log('gurmukhi', gurmukhi.to(input));
log('hanifiRohingya', hanifiRohingya.to(input));
log('javanese', javanese.to(input));
log('kannada', kannada.to(input));
log('kayahLi', kayahLi.to(input));
log('khmer', khmer.to(input));
log('khudawadi', khudawadi.to(input));
log('lao', lao.to(input));
log('lepcha', lepcha.to(input));
log('limbu', limbu.to(input));
log('malayam', malayam.to(input));
log('masaramGondi', masaramGondi.to(input));
log('meeteiMayek', meeteiMayek.to(input));
log('modi', modi.to(input));
log('mongolian', mongolian.to(input));
log('mro', mro.to(input));
log('myanmar', myanmar.to(input));
log('myanmarShan', myanmarShan.to(input));
log('myanmarTaiLaing', myanmarTaiLaing.to(input));
log('newTaiLue', newTaiLue.to(input));
log('newa', newa.to(input));
log('nko', nko.to(input));
log('nyiakengPuachueHmong', nyiakengPuachueHmong.to(input));
log('olChiki', olChiki.to(input));
log('oriya', oriya.to(input));
log('osmanya', osmanya.to(input));
log('pahawhHmong', pahawhHmong.to(input));
log('saurashtra', saurashtra.to(input));
log('sharada', sharada.to(input));
log('sinhalaLith', sinhalaLith.to(input));
log('soraSompeng', soraSompeng.to(input));
log('sundanese', sundanese.to(input));
log('taiThamHora', taiThamHora.to(input));
log('taiThamTham', taiThamTham.to(input));
log('takri', takri.to(input));
log('tamil', tamil.to(input));
log('telugu', telugu.to(input));
log('thai', thai.to(input));
log('tibetan', tibetan.to(input));
log('trihuta', trihuta.to(input));
log('vai', vai.to(input));
log('wancho', wancho.to(input));
log('warangCiti', warangCiti.to(input));
