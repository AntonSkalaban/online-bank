export class Text {
  static firstCharToUC(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static tranformName(string: string) {
    return Text.firstCharToUC(string.split("-").join(" "));
  }
}
