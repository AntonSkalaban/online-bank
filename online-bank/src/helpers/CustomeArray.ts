export class CustomeArray {
  static getFromCheckedKeys(obj: Record<string, boolean>) {
    return Object.keys(obj).filter((key) => obj[key]);
  }
}
