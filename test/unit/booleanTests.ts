import { assert } from 'assertthat';
import { boolean } from '../../lib/boolean';

suite('boolean', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(boolean).is.ofType('function');
  });

  suite('undefined', (): void => {
    test('returns false.', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      assert.that(boolean(undefined)).is.false();
    });
  });

  suite('object', (): void => {
    test('null returns false.', async (): Promise<void> => {
      assert.that(boolean(null)).is.false();
    });

    test('{} returns false.', async (): Promise<void> => {
      assert.that(boolean({})).is.false();
    });
  });

  suite('boolean', (): void => {
    test('true returns true.', async (): Promise<void> => {
      assert.that(boolean(true)).is.true();
    });

    test('false returns false.', async (): Promise<void> => {
      assert.that(boolean(false)).is.false();
    });

    test('Boolean(true) returns true.', async (): Promise<void> => {
      assert.that(boolean(new Boolean(true))).is.true();
    });

    test('Boolean(false) returns false.', async (): Promise<void> => {
      assert.that(boolean(new Boolean(false))).is.false();
    });
  });

  suite('string', (): void => {
    test('"true" returns true.', async (): Promise<void> => {
      assert.that(boolean('true')).is.true();
    });

    test('"false" returns false.', async (): Promise<void> => {
      assert.that(boolean('false')).is.false();
    });

    test('"TRUE" returns true.', async (): Promise<void> => {
      assert.that(boolean('TRUE')).is.true();
    });

    test('"FALSE" returns false.', async (): Promise<void> => {
      assert.that(boolean('FALSE')).is.false();
    });

    test('"t" returns true.', async (): Promise<void> => {
      assert.that(boolean('t')).is.true();
    });

    test('"f" returns false.', async (): Promise<void> => {
      assert.that(boolean('f')).is.false();
    });

    test('"T" returns true.', async (): Promise<void> => {
      assert.that(boolean('T')).is.true();
    });

    test('"F" returns false.', async (): Promise<void> => {
      assert.that(boolean('F')).is.false();
    });

    test('"yes" returns true.', async (): Promise<void> => {
      assert.that(boolean('yes')).is.true();
    });

    test('"no" returns false.', async (): Promise<void> => {
      assert.that(boolean('no')).is.false();
    });

    test('"YES" returns true.', async (): Promise<void> => {
      assert.that(boolean('YES')).is.true();
    });

    test('"NO" returns false.', async (): Promise<void> => {
      assert.that(boolean('NO')).is.false();
    });

    test('"y" returns true.', async (): Promise<void> => {
      assert.that(boolean('y')).is.true();
    });

    test('"n" returns false.', async (): Promise<void> => {
      assert.that(boolean('n')).is.false();
    });

    test('"Y" returns true.', async (): Promise<void> => {
      assert.that(boolean('Y')).is.true();
    });

    test('"N" returns false.', async (): Promise<void> => {
      assert.that(boolean('N')).is.false();
    });

    test('"on" returns true.', async (): Promise<void> => {
      assert.that(boolean('on')).is.true();
    });

    test('"ON" returns true.', async (): Promise<void> => {
      assert.that(boolean('ON')).is.true();
    });

    test('"1" returns true.', async (): Promise<void> => {
      assert.that(boolean('1')).is.true();
    });

    test('"0" returns false.', async (): Promise<void> => {
      assert.that(boolean('0')).is.false();
    });

    test('"contains-the-letter-t" returns false.', async (): Promise<void> => {
      assert.that(boolean('contains-the-letter-t')).is.false();
    });

    test('"contains-the-word-yes" returns false.', async (): Promise<void> => {
      assert.that(boolean('noyesno')).is.false();
    });

    test('arbitrary string returns false.', async (): Promise<void> => {
      assert.that(boolean('123')).is.false();
    });

    test('trims whitespace.', async (): Promise<void> => {
      assert.that(boolean(' true  ')).is.true();
    });

    test('String("true") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('true'))).is.true();
    });

    test('String("false") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('false'))).is.false();
    });

    test('String("TRUE") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('TRUE'))).is.true();
    });

    test('String("FALSE") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('FALSE'))).is.false();
    });

    test('String("t") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('t'))).is.true();
    });

    test('String("f") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('f'))).is.false();
    });

    test('String("T") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('T'))).is.true();
    });

    test('String("F") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('F'))).is.false();
    });

    test('String("yes") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('yes'))).is.true();
    });

    test('String("no") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('no'))).is.false();
    });

    test('String("YES") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('YES'))).is.true();
    });

    test('String("NO") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('NO'))).is.false();
    });

    test('String("y") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('y'))).is.true();
    });

    test('String("n") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('n'))).is.false();
    });

    test('String("Y") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('Y'))).is.true();
    });

    test('String("N") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('N'))).is.false();
    });

    test('String("on") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('on'))).is.true();
    });

    test('String("ON") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('ON'))).is.true();
    });

    test('String("1") returns true.', async (): Promise<void> => {
      assert.that(boolean(new String('1'))).is.true();
    });

    test('String("0") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('0'))).is.false();
    });

    test('String("contains-the-letter-t") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('contains-the-letter-t'))).is.false();
    });

    test('String("contains-the-word-yes") returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('noyesno'))).is.false();
    });

    test('arbitrary string object wrapper string returns false.', async (): Promise<void> => {
      assert.that(boolean(new String('123'))).is.false();
    });

    test('trims whitespace in string object wrapper.', async (): Promise<void> => {
      assert.that(boolean(new String(' true  '))).is.true();
    });
  });

  suite('number', (): void => {
    test('1 returns true.', async (): Promise<void> => {
      assert.that(boolean(1)).is.true();
    });

    test('0 returns false.', async (): Promise<void> => {
      assert.that(boolean(0)).is.false();
    });

    test('123 returns false.', async (): Promise<void> => {
      assert.that(boolean(123)).is.false();
    });

    test('Number(1) returns true.', async (): Promise<void> => {
      assert.that(boolean(new Number(1))).is.true();
    });

    test('Number(0) returns false.', async (): Promise<void> => {
      assert.that(boolean(new Number(0))).is.false();
    });

    test('Number(123) returns false.', async (): Promise<void> => {
      assert.that(boolean(new Number(123))).is.false();
    });
  });
});
