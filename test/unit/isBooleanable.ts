import { assert } from 'assertthat';
import { isBooleanable } from '../../lib/isBooleanable';

suite('isBooleanable', (): void => {
  suite('undefined', (): void => {
    test('returns false.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      assert.that(isBooleanable(undefined)).is.false();
    });
  });

  suite('object', (): void => {
    test('null returns false.', async (): Promise<void> => {
      assert.that(isBooleanable(null)).is.false();
    });

    test('{} returns false.', async (): Promise<void> => {
      assert.that(isBooleanable({})).is.false();
    });
  });

  suite('isBooleanable', (): void => {
    test('true returns true.', async (): Promise<void> => {
      assert.that(isBooleanable(true)).is.true();
    });

    test('false returns true.', async (): Promise<void> => {
      assert.that(isBooleanable(false)).is.true();
    });

    test('isBooleanable(true) returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new Boolean(true))).is.true();
    });

    test('isBooleanable(false) returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new Boolean(false))).is.true();
    });
  });

  suite('string', (): void => {
    test('"true" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('true')).is.true();
    });

    test('"false" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('false')).is.true();
    });

    test('"TRUE" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('TRUE')).is.true();
    });

    test('"FALSE" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('FALSE')).is.true();
    });

    test('"t" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('t')).is.true();
    });

    test('"f" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('f')).is.true();
    });

    test('"T" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('T')).is.true();
    });

    test('"F" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('F')).is.true();
    });

    test('"yes" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('yes')).is.true();
    });

    test('"no" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('no')).is.true();
    });

    test('"YES" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('YES')).is.true();
    });

    test('"NO" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('NO')).is.true();
    });

    test('"y" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('y')).is.true();
    });

    test('"n" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('n')).is.true();
    });

    test('"Y" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('Y')).is.true();
    });

    test('"N" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('N')).is.true();
    });

    test('"on" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('on')).is.true();
    });

    test('"ON" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('ON')).is.true();
    });

    test('"1" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('1')).is.true();
    });

    test('"0" returns true.', async (): Promise<void> => {
      assert.that(isBooleanable('0')).is.true();
    });

    test('"contains-the-letter-t" returns false.', async (): Promise<void> => {
      assert.that(isBooleanable('contains-the-letter-t')).is.false();
    });

    test('"contains-the-word-yes" returns false.', async (): Promise<void> => {
      assert.that(isBooleanable('noyesno')).is.false();
    });

    test('arbitrary string returns false.', async (): Promise<void> => {
      assert.that(isBooleanable('123')).is.false();
    });

    test('trims whitespace.', async (): Promise<void> => {
      assert.that(isBooleanable(' true  ')).is.true();
    });

    test('String("true") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('true'))).is.true();
    });

    test('String("false") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('false'))).is.true();
    });

    test('String("TRUE") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('TRUE'))).is.true();
    });

    test('String("FALSE") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('FALSE'))).is.true();
    });

    test('String("t") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('t'))).is.true();
    });

    test('String("f") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('f'))).is.true();
    });

    test('String("T") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('T'))).is.true();
    });

    test('String("F") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('F'))).is.true();
    });

    test('String("yes") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('yes'))).is.true();
    });

    test('String("no") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('no'))).is.true();
    });

    test('String("YES") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('YES'))).is.true();
    });

    test('String("NO") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('NO'))).is.true();
    });

    test('String("y") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('y'))).is.true();
    });

    test('String("n") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('n'))).is.true();
    });

    test('String("Y") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('Y'))).is.true();
    });

    test('String("N") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('N'))).is.true();
    });

    test('String("on") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('on'))).is.true();
    });

    test('String("ON") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('ON'))).is.true();
    });

    test('String("1") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('1'))).is.true();
    });

    test('String("0") returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('0'))).is.true();
    });

    test('String("contains-the-letter-t") returns false.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('contains-the-letter-t'))).is.false();
    });

    test('String("contains-the-word-yes") returns false.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('noyesno'))).is.false();
    });

    test('arbitrary string object wrapper string returns false.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String('123'))).is.false();
    });

    test('trims whitespace in string object wrapper.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new String(' true  '))).is.true();
    });
  });

  suite('number', (): void => {
    test('1 returns true.', async (): Promise<void> => {
      assert.that(isBooleanable(1)).is.true();
    });

    test('0 returns true.', async (): Promise<void> => {
      assert.that(isBooleanable(0)).is.true();
    });

    test('123 returns false.', async (): Promise<void> => {
      assert.that(isBooleanable(123)).is.false();
    });

    test('Number(1) returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new Number(1))).is.true();
    });

    test('Number(0) returns true.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new Number(0))).is.true();
    });

    test('Number(123) returns false.', async (): Promise<void> => {
      // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
      assert.that(isBooleanable(new Number(123))).is.false();
    });
  });
});
