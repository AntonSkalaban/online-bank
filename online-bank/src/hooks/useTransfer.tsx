import { productAPI } from "services/api";
import { UserCard } from "type";

export const useTransfer = () => {
  const [updateCard] = productAPI.useUpdateProductMutation();

  const triggerTransfer = (card: UserCard, amount: number) => {
    updateCard({
      productType: "cards",
      body: card,
      newParams: { balance: amount },
    });
  };
  return { triggerTransfer };
};
