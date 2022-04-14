const { expect, test, describe } = require('@jest/globals');
const {positiveSum, opposite, removeChar, repeatStr} = require('../index')

describe('positiveSum', () => {
  test('positiveSum', () => {
    expect(positiveSum([1, 3, -7, 8 , 9, 0])).toBe(21);
    expect(positiveSum([20, 0, -11, 0 , 0, 0])).toBe(20);
    expect(positiveSum([-1])).toBe(0);
  })
})

describe('opposite', () => {
  test('opposite', () => {
    expect(opposite(1)).toBe(-1);
    expect(opposite(2.3)).toBe(-2.3);
    expect(opposite(-20)).toBe(20);
  })
})

describe('removeChar', () => {
  test('removeChar', () => {
    expect(removeChar('Мовсар, привет!')).toBe('овсар, привет');
    expect(removeChar('я люблю лягушек')).toBe(' люблю лягуше');
    expect(removeChar('пук')).toBe('у');
  })
})

describe('repeatStr', () => {
  test('repeatStr', () => {
    expect(repeatStr(7, '*')).toBe('*******');
    expect(repeatStr(1, 'кчау')).toBe('кчау');
    expect(repeatStr(0, 'пук')).toBe('');
  })
})
