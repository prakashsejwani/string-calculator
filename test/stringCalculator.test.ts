import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself when a single number is provided', () => {
    expect(calculator.add("1")).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(calculator.add("1,5")).toBe(6);
  });
});
