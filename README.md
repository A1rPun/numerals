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
aegean | 1 - 99999 | 𐄓𐄈 |
arabic eastern | 0 - Infinite | ٤۲ |
armenian | 1 - 9999 | ԽԲ |
ASL | All | 𝠀𝠎𝠞 | US / FR / BE / DE / CN
attic | 1 - 99999 | ΔΔΔΔII | herodianic, acrophonic
babylonian | 0 - Infinite | 𒑩𒐖 |
bengali | 0 - Infinite | ৪২ |
bijective | 1 - Infinite | AP |
braille | All | ⠼⠙⠃ |
chinese eastern | 1 - 999 | 四十二 | WIP
burmese | 0 - Infinite | ၄၂ |
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
gujarati | 0 - Infinite | ૪૨ |
gurmukhi | 0 - Infinite | ੪੨ |
hebrew | 1 - 999 | םב |
kannada | 0 - Infinite | ೪೨ |
kharosthi | 1 - 9999 | 𐩅𐩅𐩁 |
khmer | 0 - Infinite | ៤២ |
lao | 0 - Infinite | ໔໒ |
malayalam | 0 - Infinite | ൪൨ |
maya | 0 - Infinite | ⡁ ⡁ | Using pipes and braille to mimic the script
mongolian | 0 - Infinite | ᠔᠒ |
morse | All | .---- ..--- ...-- |
odia | 0 - Infinite | ୪୨ |
persian | 0 - Infinite | ۴۲ | dari, pashto
phoenician | 1 - 999 | 𐤘𐤘𐤚 |
roman | 1 - 9999 | XLII |
tally marks | 1 - Infinite | 𝍸 |
tally marks chinese | 1 - Infinite | 𝍶 |
tamil | 0 - Infinite | ௪௨ |
telugu | 0 - Infinite | ౪౨ |
thai | 0 - Infinite | ๔๒ |
tibetan | 0 - Infinite | ༤༢ |

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
- Asian - [x] Simplified - [ ] Traditional
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
