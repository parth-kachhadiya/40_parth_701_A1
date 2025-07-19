const { findKeywords } = require('./js-keyword-helper');

const input = "let x = 5; if (x > 0) console.log('positive');";
console.log(findKeywords(input));
