import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
   test('should return 0 for an empty string', () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(StringCalculator.add("1")).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(StringCalculator.add("1,5")).toBe(6);
  });
});
