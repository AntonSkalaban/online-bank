export class ProductNumber {
  static showLatestNumbers(number: string) {
    return number.slice(-4);
  }

  static showExtremeNumbers(number: string) {
    return number.substring(0, 4) + "******" + number.slice(-4);
  }

  static hideAllNumber(number: string) {
    return number.replace(/./g, "*");
  }

  static getRandomNumber(length: number) {
    return Math.random()
      .toString()
      .slice(2, length + 2);
  }
}
