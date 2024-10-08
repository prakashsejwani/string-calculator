import { StringCalculator } from './stringCalculator';

const testCases = [
  "",         // Output: 0
  "1",        // Output: 1
  "1,5",      // Output: 6
  "10,20,30",  // Output: 60
  "a",  // Output: 0
  "1,2,invalid,3",  // Output: 6
  "1\n2,3",  // Output: 6
  "//;\n1;2",  // Output: 3
  "//[***]\n1***2***3", // Output: 6
  "2,1001", // Output: 2
  "1,-2,-3", // Throws error "Negative numbers not allowed: -2, -3"
];

testCases.forEach(testCase => {
  console.log(`Input: "${testCase}", Output: ${StringCalculator.add(testCase)}`);
});
