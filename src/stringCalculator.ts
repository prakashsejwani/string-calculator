export class StringCalculator {
  public static add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    // Check if the input starts with the custom delimiter format
    if (numbers.startsWith("//")) {
      // Find the end of the custom delimiter line
      const delimiterLineEnd = numbers.indexOf('\n');

      // Extract the custom delimiter
      const delimiter = numbers.slice(2, delimiterLineEnd).trim();
      const numbersPart = numbers.slice(delimiterLineEnd + 1);

      // Split the numbers using the custom delimiter
      const numArray = numbersPart
        .split(new RegExp(`[${delimiter}]`)) // Use a regular expression to split by the custom delimiter
        .map(num => num.trim()) // Trim spaces around numbers
        .filter(num => num !== "") // Remove empty strings
        .map(num => parseInt(num, 10)) // Convert to numbers
        .filter(num => !isNaN(num)); // Remove NaN values

      // Sum up the numbers
      return numArray.reduce((sum, num) => sum + num, 0);
    } else {
      // Handle default case with comma and newline delimiters
      const numArray = numbers
        .split(/[\n,]/) // Split by commas and new lines
        .map(num => num.trim()) // Trim spaces around numbers
        .filter(num => num !== "") // Remove empty strings
        .map(num => parseInt(num, 10)) // Convert to numbers
        .filter(num => !isNaN(num)); // Remove NaN values

      // Sum up the numbers
      return numArray.reduce((sum, num) => sum + num, 0);
    }
  }
}
