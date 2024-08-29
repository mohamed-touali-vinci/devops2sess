const isLeapYears = require('./isLeapYear');

test('2000 est une année bissextile', () => {
  expect(isLeapYears(2000)).toBe(true);
});

test('1700 n\'est pas une année bissextile', () => {
  expect(isLeapYears(1700)).toBe(false);
});

test('2008 est une année bissextile', () => {
  expect(isLeapYears(2008)).toBe(true);
});

test('2017 n\'est pas une année bissextile', () => {
  expect(isLeapYears(2017)).toBe(false);
});
