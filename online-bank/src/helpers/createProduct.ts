import { DefaultCard, Credit } from "type/type";
import { getRandomNumber } from "./getRandomNumber";

export const createProduct = (
  productType: "credits" | "cards" | "deposits",
  body: DefaultCard | Credit
) => {
  if (productType === "cards")
    return {
      ...body,
      date: new Date(),
      number: getRandomNumber(9),
      cvv: getRandomNumber(3),
      balance: 0,
    };
};
