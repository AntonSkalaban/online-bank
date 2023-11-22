import { DefaultCard, UserCard, UserCredit } from "type";
import { ProductNumber } from "./ProductNumber";

export class Product {
  static create(
    productType: "credits" | "cards" | "deposits",
    body: DefaultCard | UserCredit
  ) {
    if (productType === "cards")
      return {
        ...body,
        date: new Date(),
        number: ProductNumber.getRandomNumber(12),
        cvv: ProductNumber.getRandomNumber(3),
        balance: 0,
      };
  }

  static update(
    body: UserCard | UserCredit,
    editableVal: Record<string, string | number>
  ) {
    return { ...body, ...editableVal };
  }
}
