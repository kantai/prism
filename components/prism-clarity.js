// Clarity PrismJS Grammar
//
// Based off of the Scheme grammar
//   available at https://github.com/PrismJS/prism/blob/master/components/prism-scheme.js

Prism.languages.clarity = {
  'comment': /;;.*/,
  'string': {
    pattern: /"(?:[^"\\]|\\.)*"/,
    greedy: true
  },
  'symbol': {
    pattern: /'[^()#'\s]+/,
    greedy: true
  },
  'lambda-parameter': [
    // https://www.cs.cmu.edu/Groups/AI/html/r4rs/r4rs_6.html#SEC30
    {
      pattern: /(\(lambda\s+)[^()'\s]+/,
      lookbehind: true
    },
    {
      pattern: /(\(lambda\s+\()[^()']+/,
      lookbehind: true
    }
  ],
  'keyword': {
    pattern: /(\()(?:define(?:-public|-constant|-private|-read-only|-map|-data-var)?|let(?:(?:\*|rec)?(?:-values)?)|if|begin)(?=[()\s]|$)/,
    lookbehind: true
  },
  'builtin': {
    pattern: /(\()(?:or|and|xor|not|begin|let|if|ok|err|unwrap!|unwrap-err!|unwrap-panic|unwrap-err-panic|match|try!|asserts!|map-get\?|var-get|contract-map-get\?|get|tuple|is-eq|is-some|is-none|is-ok|is-err|var-set|map-set|map-delete|map-insert|ft-transfer\?|nft-transfer\?|nft-mint\?|ft-mint\?|nft-get-owner\?|ft-get-balance\?|contract-call\?)(?=[()\s]|$)/,
    lookbehind: true
  },
  'number': {
    // This pattern (apart from the lookarounds) works like this:
    //
    // Decimal numbers
    // <dec real>       := \d*\.?\d+(?:[eE][+-]?\d+)?|\d+\/\d+
    // <dec complex>    := <dec real>(?:[+-]<dec real>i)?|<dec real>i
    // <dec prefix>     := (?:#d(?:#[ei])?|#[ei](?:#d)?)?
    // <dec number>     := <dec prefix>[+-]?<complex>
    //
    // Binary, octal, and hexadecimal numbers
    // <b.o.x. real>    := [\da-fA-F]+(?:\/[\da-fA-F]+)?
    // <b.o.x. complex> := <b.o.x. real>(?:[+-]<b.o.x. real>i)?|<b.o.x. real>i
    // <b.o.x. prefix>  := #[box](?:#[ei])?|#[ei](?:#[box])?
    // <b.o.x. number>  := <b.o.x. prefix>[+-]?<b.o.x. complex>
    //
    // <number>         := <dec number>|<b.o.x. number>
    pattern: /([\s()])(?:(\d+)|(u\d+)|(0x[a-fA-F0-9]+)|(\'[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{28,41}))(?=[()\s]|$)/,
    lookbehind: true
  },
  'boolean': /(?:false|true)(?=[()\s]|$)/,
  'operator': {
    pattern: /(\()(?:[-+*\/]|[<>]=?|=>?)(?=[()\s]|$)/,
    lookbehind: true
  },
  'function': {
    pattern: /(\()[^()'\s]+(?=[()\s]|$)/,
    lookbehind: true
  },
  'punctuation': /[()']/
};

