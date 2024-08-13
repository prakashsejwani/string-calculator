export class StringCalculator {
  public static add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    // Split the input string by commas and new lines and filter out any empty strings
    const numArray = numbers
      .split(/[\n,]/) // Use a regular expression to split by either comma or new line
      .map(num => num.trim()) // Trim spaces around numbers
      .filter(num => num !== "") // Remove empty strings
      .map(num => parseInt(num, 10)) // Convert to numbers
      .filter(num => !isNaN(num)); // Remove NaN values

    // Sum up the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
