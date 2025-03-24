'use strict';

var bench = require('@stdlib/bench');
var randu = require('@stdlib/random/base/randu');
var isnanf = require('@stdlib/math/base/assert/is-nanf');
// FIXED PATH:
var pkg = require('../../package.json').name;  
var exp10f = require('./../lib/exp10f');

bench(pkg, function benchmark(b) {
    var x;
    var y;
    var i;

    b.tic();
    for (i = 0; i < b.iterations; i++) {
        x = (randu() * 20.0) - 10.0;  // random number between -10 and 10
        y = exp10f(x);
        if (isnanf(y)) {
            b.fail('should not return NaN');
        }
    }
    b.toc();
    if (isnanf(y)) {
        b.fail('should not return NaN');
    }
    b.pass('benchmark finished');
    b.end();
});
