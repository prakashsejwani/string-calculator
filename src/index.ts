import { StringCalculator } from './stringCalculator';

const calculator = new StringCalculator();

const resultWithEmptyString = calculator.add("");
const resultWithSingleNumberString = calculator.add("1, 5");

console.log(`Addition Result: ${resultWithEmptyString}`);  // Addition Result: 0
console.log(`Addition Result: ${resultWithSingleNumberString}`);  // Addition Result: 1
