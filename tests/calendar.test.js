import calendar from '../src/helpers/calendar';

describe('calendar helpers', () => {
  test('getMonths returns 42 element', () => {
    const monthArray = calendar.getMonthArray();
    expect(monthArray.length).toBe(42);
  });
});
