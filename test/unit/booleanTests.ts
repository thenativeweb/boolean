import assert from 'assertthat';
import boolean from '../../lib/boolean';

suite('boolean', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(boolean).is.ofType('function');
  });

  suite('undefined', (): void => {
    test('returns false.', async (): Promise<void> => {
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
  });
});
