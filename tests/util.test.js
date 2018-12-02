import * as util from '../src/helpers/util';

describe('pad', () => {
  test('should return string', () => {
    const result = util.pad('x');
    expect(typeof result).toBe('string');
  });

  test('should pad correctly', () => {
    const cases = [
      {
        args: ['x', 3, undefined],
        expected: '00x',
      },
      {
        args: ['xxx', 3, undefined],
        expected: 'xxx'
      },
      {
        args: ['xx', 3, 'y'],
        expected: 'yxx'
      },
      {
        args: [2, undefined, undefined],
        expected: '02'
      }
    ]
    cases.forEach(c => {
      const result = util.pad(...c.args);
      expect(result).toBe(c.expected);
    });
  });
});
