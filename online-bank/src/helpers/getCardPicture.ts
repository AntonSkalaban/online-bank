export const getCardPircture = (
  isVirtual: boolean,
  paymentSystem: "Visa" | "Mastercard"
) => {
  if (isVirtual) return "card-img_virtual";
  return paymentSystem === "Visa" ? "card-img_visa" : "card-img_mastercard";
};
