import { productAPI } from "services/api";
import { UserCard } from "type";
import { useGetCourse } from "./useGetCourse";

export const useTransferFromCardToCard = (
  fromCard: UserCard,
  toCard: UserCard,
  amount: number
) => {
  const [updateCard] = productAPI.useUpdateProductMutation();
  const course = useGetCourse(fromCard?.currency, toCard?.currency);

  const triggerTransfer = () => {
    if (!course) return;

    updateCard({
      productType: "cards",
      body: fromCard,
      newParams: { balance: +(fromCard.balance - amount).toFixed(2) },
    });

    updateCard({
      productType: "cards",
      body: toCard,
      newParams: { balance: toCard.balance + amount * course },
    });
  };
  return { triggerTransfer };
};
