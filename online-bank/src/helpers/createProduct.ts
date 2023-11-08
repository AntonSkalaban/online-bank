import { DefaultCard, UserCredit } from "type";
import { ProductNumber } from "./ProductNumber";

export const createProduct = (
  productType: "credits" | "cards" | "deposits",
  body: DefaultCard | UserCredit
) => {
  if (productType === "cards")
    return {
      ...body,
      date: new Date(),
      number: ProductNumber.getRandomNumber(12),
      cvv: ProductNumber.getRandomNumber(3),
      balance: 0,
    };
};
