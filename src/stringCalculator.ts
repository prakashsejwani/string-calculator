export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    // Split the string by comma and convert to numbers
    const numArray = numbers.split(',').map(num => parseInt(num, 10));

    // Sum the numbers
    return numArray.reduce((sum, current) => sum + current, 0);
  }
}
