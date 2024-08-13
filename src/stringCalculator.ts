export class StringCalculator {
  public static add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let delimiter: string;
    let numbersPart: string;

    // Check if the input starts with the custom delimiter format
    if (numbers.startsWith("//")) {
      // Find the end of the custom delimiter line
      const delimiterLineEnd = numbers.indexOf('\n');

      // Extract the custom delimiter
      const delimiterPart = numbers.slice(2, delimiterLineEnd).trim();

      // Handle delimiters enclosed in brackets (e.g., [***])
      if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
        delimiter = delimiterPart.slice(1, -1); // Remove the surrounding brackets
      } else {
        delimiter = delimiterPart;
      }

      numbersPart = numbers.slice(delimiterLineEnd + 1);
    } else {
      // Default delimiters
      delimiter = ',\n';
      numbersPart = numbers;
    }

    // Split the numbers using the custom delimiter
    const numArray = numbersPart
      .split(new RegExp(`[${delimiter}]`)) // Split by the custom delimiter
      .map(num => num.trim()) // Trim spaces around numbers
      .filter(num => num !== "") // Remove empty strings
      .map(num => parseInt(num, 10)) // Convert to numbers
      .filter(num => num < 1000) // Ignore numbers greater than 1000
      .filter(num => !isNaN(num)); // Remove NaN values

    // Find negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    // Sum up the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
