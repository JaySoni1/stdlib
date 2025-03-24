'use strict';

var exp10f = require('./../lib/exp10f.js');

console.log(exp10f(1.0));   // => 10.0
console.log(exp10f(2.0));   // => 100.0
console.log(exp10f(-1.0));  // => 0.1
console.log(exp10f(0.0));   // => 1.0
