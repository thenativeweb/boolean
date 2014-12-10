'use strict';

var assert = require('node-assertthat');

var boolean = require('../lib/boolean');

suite('boolean', function () {
  test('is a function.', function (done) {
    assert.that(boolean, is.ofType('function'));
    done();
  });
});
