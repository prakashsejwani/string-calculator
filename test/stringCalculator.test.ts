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

  test('should handle numbers separated by new lines', () => {
    expect(StringCalculator.add("1\n2\n3")).toBe(6);
  });

  test('should handle mixed delimiters (commas and new lines)', () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
  });

  test('should handle numbers with extra commas or new lines', () => {
    expect(StringCalculator.add("1\n\n2,,3")).toBe(6); // Handles extra new lines and commas
  });

  test('should handle spaces around delimiters', () => {
    expect(StringCalculator.add("1, 2\n 3")).toBe(6); // Handles spaces around numbers
  });

  test('should handle custom delimiter defined at the beginning', () => {
    expect(StringCalculator.add("//;\n1;2")).toBe(3); // Custom delimiter ";"
  });
});
