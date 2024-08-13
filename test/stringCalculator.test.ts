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

  test('should handle numbers with extra commas', () => {
    expect(StringCalculator.add("1,,5")).toBe(6); // Treats empty strings between commas as 0
  });

  test('should handle spaces around commas', () => {
    expect(StringCalculator.add("1, 5")).toBe(6); // Handles spaces around numbers
  });

  test('should handle mixed valid and invalid inputs', () => {
    expect(StringCalculator.add("1,2,invalid,3")).toBe(6); // Ignores invalid inputs
  });
});
