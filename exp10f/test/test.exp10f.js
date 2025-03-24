'use strict';

var tape = require('tape');
var exp10f = require('./../lib/exp10f.js');

tape('main export is a function', function (t) {
    t.ok(true, __filename);
    t.strictEqual(typeof exp10f, 'function', 'main export is a function');
    t.end();
});

tape('the function computes 10^x', function (t) {
    t.strictEqual(exp10f(1.0), 10.0, 'returns 10 for x=1');
    t.strictEqual(exp10f(0.0), 1.0, 'returns 1 for x=0');
    t.strictEqual(exp10f(-1.0), 0.1, 'returns 0.1 for x=-1');
    t.strictEqual(exp10f(2.0), 100.0, 'returns 100 for x=2');
    t.end();
});
