import { productAPI } from "services/api";
import { UserCard } from "type";

export const useTransferFromCardToCard = () => {
  const [updateCard] = productAPI.useUpdateProductMutation();

  const triggerTransfer = (
    fromCard: UserCard,
    toCard: UserCard,
    amount: number
  ) => {
    updateCard({
      productType: "cards",
      body: toCard,
      newParams: { balance: toCard.balance + amount },
    });

    updateCard({
      productType: "cards",
      body: fromCard,
      newParams: { balance: fromCard.balance - amount },
    });
  };
  return { triggerTransfer };
};
