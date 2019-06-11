# Numerals

> Numerals of the world. Convert western arabic to any numeral system and vice versa.

## Supported systems

> Infinite = accurate till Number.MAX_SAFE_INTEGER

System | Range | Description
--- | --- | ---
abjad | 1 - 999 |
aegean | 1 - 99999 |
arabic eastern | 0 - Infinite |
armenian | 1 - 9999 |
asian eastern |  | chinese, japanese, korean, vietnamese
attic | 1 - 99999 | herodianic, acrophonic
babylonian | 0 - Infinite |
bengali | 0 - Infinite |
bijective | 1 - Infinite |
braille | 0 - Infinite |
burmese | 0 - Infinite |
chuvash | 1 - 9999 |
counting rods | 1 - Infinite |
cyrillic | 1 - 9999 |
devanagari | 0 - Infinite |
duodecimal | -Infinite - Infinite |
egyptian | 1 - 9999999 |
etruscan | 1 - 999 |
ge'ez | 1 - 999 |
georgian | 1 - 99999 |
glagolitic | 1 - 6999 |
greek | 1 - 999999 | alphabetic, ionic, ionian, milesian, alexandrian
gujarati | 0 - Infinite |
gurmukhi | 0 - Infinite |
hebrew | 1 - 999 |
kannada | 0 - Infinite |
kharosthi | 1 - 9999 |
khmer | 0 - Infinite |
lao | 0 - Infinite |
malayalam | 0 - Infinite |
mongolian | 0 - Infinite |
odia | 0 - Infinite |
persian | 0 - Infinite | dari, pashto
phoenician | 1 - 999 |
roman | 1 - 9999 |
tally marks |  |
tamil | 0 - Infinite |
telugu | 0 - Infinite |
thai | 0 - Infinite |
tibetan | 0 - Infinite |

## TODO

- https://courses.lumenlearning.com/waymakermath4libarts/chapter/the-hindu-arabic-number-system/
- https://www.convert-me.com/en/convert/hex_octal_binary_roman/numdec.html?u=numdec&v=1
- https://en.wikipedia.org/wiki/List_of_numbers_in_various_languages
- Implement -> throw Error('Not implemented');
- Fractions for some languages
- Negative numbers for some languages
- Error handling for valid input (Garbage in garbage out for now)

### Systems

- Maya https://en.wikipedia.org/wiki/Maya_numerals
- Roman -> apostrophus, vinculum

### Improvements

- Armenian - Writing numbers greater than 9999 is done by drawing a line over them, indicating their value is to be multiplied by 10000.
- Asian - use 10, 100, 1000 signs (https://en.wikipedia.org/wiki/Korean_numerals). 零 = 0 ?
- Attic - Confirm `5` is `Π` instead of `Γ`
- Chuvash - Need a better 1, 10 and 50 (50 needs to be upside down)
- Duodecimal - Fallback on ⵒ/Ɛ or X/E
- Ge'ez - ፼ = 10000
- Greek - Confirm `6` is `ϝ` instead of `ϛ`. Accept numbers above 999999 (myriad) ρκγΜ δφξζ
- Hebrew - Not all numbers supported between 1-999
- Malayalam - 10, 100, 1000 as ൰, ൱, ൲
- Phoenician - Find out why the browser output (correct) differs from nodejs (wrong)
- Roman / Cyrillic / Kharosthi String.repeat need better implementation
- Tally marks - better implementation /|||| /||
- Tamil - 10, 100, 1000 as ௰, ௱, ௲

## Licence

MIT
