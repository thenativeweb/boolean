'use strict';

var assert = require('assertthat');

var boolean = require('../lib/boolean');

suite('boolean', function () {
  test('is a function.', function (done) {
    assert.that(boolean).is.ofType('function');
    done();
  });

  suite('undefined', function () {
    test('returns false.', function (done) {
      assert.that(boolean(undefined)).is.false();
      done();
    });
  });

  suite('object', function () {
    test('null returns false.', function (done) {
      assert.that(boolean(null)).is.false();
      done();
    });

    test('{} returns false.', function (done) {
      assert.that(boolean({})).is.false();
      done();
    });
  });

  suite('boolean', function () {
    test('true returns true.', function (done) {
      assert.that(boolean(true)).is.true();
      done();
    });

    test('false returns false.', function (done) {
      assert.that(boolean(false)).is.false();
      done();
    });
  });

  suite('string', function () {
    test('"true" returns true.', function (done) {
      assert.that(boolean('true')).is.true();
      done();
    });

    test('"false" returns false.', function (done) {
      assert.that(boolean('false')).is.false();
      done();
    });

    test('"TRUE" returns true.', function (done) {
      assert.that(boolean('TRUE')).is.true();
      done();
    });

    test('"FALSE" returns false.', function (done) {
      assert.that(boolean('FALSE')).is.false();
      done();
    });

    test('"t" returns true.', function (done) {
      assert.that(boolean('t')).is.true();
      done();
    });

    test('"f" returns false.', function (done) {
      assert.that(boolean('f')).is.false();
      done();
    });

    test('"T" returns true.', function (done) {
      assert.that(boolean('T')).is.true();
      done();
    });

    test('"F" returns false.', function (done) {
      assert.that(boolean('F')).is.false();
      done();
    });

    test('"yes" returns true.', function (done) {
      assert.that(boolean('yes')).is.true();
      done();
    });

    test('"no" returns false.', function (done) {
      assert.that(boolean('no')).is.false();
      done();
    });

    test('"YES" returns true.', function (done) {
      assert.that(boolean('YES')).is.true();
      done();
    });

    test('"NO" returns false.', function (done) {
      assert.that(boolean('NO')).is.false();
      done();
    });

    test('"y" returns true.', function (done) {
      assert.that(boolean('y')).is.true();
      done();
    });

    test('"n" returns false.', function (done) {
      assert.that(boolean('n')).is.false();
      done();
    });

    test('"Y" returns true.', function (done) {
      assert.that(boolean('Y')).is.true();
      done();
    });

    test('"N" returns false.', function (done) {
      assert.that(boolean('N')).is.false();
      done();
    });

    test('"1" returns true.', function (done) {
      assert.that(boolean('1')).is.true();
      done();
    });

    test('"0" returns false.', function (done) {
      assert.that(boolean('0')).is.false();
      done();
    });

    test('"contains-the-letter-t" returns false.', function (done) {
      assert.that(boolean('contains-the-letter-t')).is.false();
      done();
    });

    test('"contains-the-word-yes" returns false.', function (done) {
      assert.that(boolean('noyesno')).is.false();
      done();
    });

    test('arbitrary string returns false.', function (done) {
      assert.that(boolean('123')).is.false();
      done();
    });
  });

  suite('number', function () {
    test('1 returns true.', function (done) {
      assert.that(boolean(1)).is.true();
      done();
    });

    test('0 returns false.', function (done) {
      assert.that(boolean(0)).is.false();
      done();
    });

    test('123 returns false.', function (done) {
      assert.that(boolean(123)).is.false();
      done();
    });
  });
});
