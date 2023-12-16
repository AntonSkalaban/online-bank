export class Arr {
  static getFromCheckedKeys(obj: Record<string, boolean>) {
    return Object.keys(obj).filter((key) => obj[key]);
  }
}
