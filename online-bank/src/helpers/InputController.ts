export class InputController {
  static getNumberValue(value = "") {
    return +value.replace(/\D+/g, "");
  }
}
