# Numerals

> Numerals of the world. Convert western arabic to any numeral system and vice versa.

## Supported systems

- Example number = 42
- Range
  - Infinite = accurate till Number.MAX_SAFE_INTEGER
  - All = All numbers supported

System | Range | Example | Description
--- | --- | --- | ---
abjad | 1 - 999 | مب |
adlam | ALL | 𞥔𞥒 |
aegean | 1 - 99999 | 𐄓𐄈 |
ahom | ALL | 𑜴𑜲 |
arabic eastern | 0 - Infinite | ٤۲ |
armenian | 1 - 9999 | ԽԲ |
ASL | All | 𝡄𝠎 | US / FR / BE / DE / CN
attic | 1 - 99999 | ΔΔΔΔII | herodianic, acrophonic
babylonian | 0 - Infinite | 𒑩𒐖 |
balinese | ALL | ᭔᭒ |
bengali | 0 - Infinite | ৪২ |
bhaisuki | ALL | 𑱔𑱒 |
bijective | 1 - Infinite | AP |
brahmi | ALL | 𑁞𑁓 |
braille | All | ⠼⠙⠃ |
chakma | ALL | 𑄺𑄸 |
cham | ALL | ꩔꩒ |
chinese simplified | 1 - 999 | 四十二 | WIP
chuvash | 1 - 9999 | IIXXXX |
counting rods | 1 - Infinite | 𝍣𝍪 |
cyrillic | 1 - 9999 | МВ |
devanagari | 0 - Infinite | ४२ |
duodecimal | All | 36 |
egyptian | 1 - 9999999 | 𓎆𓎆𓎆𓎆𓏺𓏺 |
etruscan | 1 - 999 | 𐌠𐌠𐌢𐌢𐌢𐌢 |
ge'ez | 1 - 999 | ፵፪ |
georgian | 1 - 99999 | მბ |
glagolitic | 1 - 6999 | ⰍⰁ |
greek | 1 - 999999 | μβʹ | alphabetic, ionic, ionian, milesian, alexandrian
greek modern | ALL | ΜΒʹ |
gujarati | 0 - Infinite | ૪૨ |
gunjala gondi | ALL | 𑶤𑶢 |
gurmukhi | 0 - Infinite | ੪੨ |
hanifi rohingya | ALL | 𐴴𐴲 |
hebrew | 1 - 999 | םב |
javanese | ALL | ꧔꧒ |
kannada | 0 - Infinite | ೪೨ |
kayah li | ALL | ꤄꤂ |
kharosthi | 1 - 9999 | 𐩅𐩅𐩁 |
khmer | 0 - Infinite | ៤២ |
khudawadi | ALL | 𑋴𑋲 |
lao | 0 - Infinite | ໔໒ |
lepcha | ALL | ᱄᱂ |
limbu | ALL | ᥊᥈ |
malayalam | 0 - Infinite | ൪൨ |
masaram gondi | ALL | 𑵔𑵒 |
maya | 0 - Infinite | ⡁ ⡁ | Using pipes and braille to mimic the script
meetei mayek | ALL | ꯴꯲ |
modi | ALL | 𑙔𑙒 |
mongolian | 0 - Infinite | ᠔᠒ |
morse | All | ....- ..--- |
mro | ALL | 𖩤𖩢 |
myanmar | ALL | ၄၂ | burmese
myanmar shan | ALL | ႔႒ |
myanmar tai laing | ALL | ꧴꧲ |
newa | ALL | 𑑔𑑒 |
new tai lue | ALL | ᧔᧒ |
nko | ALL | ߄߂ |
nyiakeng puachue hmong | ALL | 𞅄𞅂 |
oriya | ALL | ୪୨ |
osmanya | ALL | 𐒤𐒢 |
persian | 0 - Infinite | ۴۲ | dari, pashto, "extended arabic indic"
phoenician | 1 - 999 | 𐤘𐤘𐤚 |
roman | 1 - 9999 | XLII |
saurashtra | ALL | ꣔꣒
sharada | ALL | 𑇔𑇒
sinhala lith | ALL | ෪෨
sora sompeng | ALL | 𑃴𑃲
sundanese | ALL | ᮴᮲
tai tham hora | ALL | ᪄᪂
tai tham tham | ALL | ᪔᪒
takri | ALL | 𑛄𑛂
tally marks | 1 - Infinite | 𝍸𝍸𝍸𝍸𝍸𝍸𝍸𝍸𝍪 |
tally marks chinese | 1 - Infinite | 𝍶𝍶𝍶𝍶𝍶𝍶𝍶𝍶𝍳 |
tamil | 0 - Infinite | ௪௨ |
telugu | 0 - Infinite | ౪౨ |
thai | 0 - Infinite | ๔๒ |
tibetan | 0 - Infinite | ༤༢ |
trihuta | ALL | 𑓔𑓒
vai | ALL | ꘤꘢
wancho | ALL | 𞋴𞋲
warang citi | ALL | 𑣤𑣢

#### More

Bold 𝟒𝟐
Double Struck 𝟜𝟚
Full Width ４２
Sans Serif 𝟦𝟤
Sans Serif Bold 𝟰𝟮
Monospace 𝟺𝟸

## TODO

- https://courses.lumenlearning.com/waymakermath4libarts/chapter/the-hindu-arabic-number-system/
- https://en.wikipedia.org/wiki/List_of_numbers_in_various_languages
- Implement -> `throw Error('Not implemented');`
- `String.repeat` need better implementation for some languages
- Fractions for some languages
- Negative numbers for some languages
- Error handling for valid input (Garbage in garbage out for now)
- Scientific notation
- Unicode maps
- dictionaries better than array lookup

### Improvements

- Armenian - Writing numbers greater than 9999 is done by drawing a line over them, indicating their value is to be multiplied by 10000.
- Chinese - [x] Simplified - [ ] Traditional
- Attic - Confirm `5` is `Π` instead of `Γ`
- Chuvash - Need a better 1, 10 and 50 (50 needs to be upside down)
- Ge'ez - ፼ = 10000
- Greek - Confirm `6` is `ϝ` instead of `ϛ`. Accept numbers above 999999 (myriad) ρκγΜ δφξζ
- Greek Modern - Parse alphabetic (greek.js too)
- Malayalam - 10, 100, 1000 as ൰, ൱, ൲
- Maya - Unicode (12.0) implementation
- Phoenician - Find out why the (correct) browser output differs from nodejs (wrong) output
- Roman - Apostrophus, Vinculum
- Tamil - 10, 100, 1000 as ௰, ௱, ௲

## Licence

MIT
