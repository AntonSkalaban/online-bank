export class ProductNumber {
  static showLatestNumbers(number: string) {
    return number.slice(-4);
  }

  static hideNumber(number: string) {
    return number.substring(0, 6) + "******" + number.substring(-4);
  }

  static getRandomNumber(length: number) {
    return Math.random()
      .toString()
      .slice(2, length + 2);
  }
}
