export class ProductNumber {
  static hideNumber(number: string) {
    return number.slice(-4);
  }

  static getRandomNumber(length: number) {
    return Math.random()
      .toString()
      .slice(2, length + 2);
  }
}
