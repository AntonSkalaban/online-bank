export class InputController {
  static getNumberValue(value = "") {
    return value.replace(/\D+/g, "");
  }

  static formatCardValue(value: string) {
    const numbers = this.getNumberValue(value);
    const numbersArray = numbers.match(/.{1,4}/g);

    if (numbersArray) {
      const newVal = numbersArray.join(" ");
      return newVal.length <= 19 ? newVal : newVal.substring(0, 19);
    }
    return numbers;
  }

  static formatPhoneValue(value: string) {
    const numbers = this.getNumberValue(value).substring(0, 9);
    const match = numbers.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);

    if (numbers.length <= 9) {
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
      }
    }

    return numbers;
  }
}
