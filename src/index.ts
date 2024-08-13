import { StringCalculator } from './stringCalculator';

const testCases = [
  "",         // Output: 0
  "1",        // Output: 1
  "1,5",      // Output: 6
  "10,20,30"  // Output: 60
];

testCases.forEach(testCase => {
  console.log(`Input: "${testCase}", Output: ${StringCalculator.add(testCase)}`);
});
