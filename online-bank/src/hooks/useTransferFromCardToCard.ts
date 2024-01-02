import { UserCard } from "type";
import { useGetCourse } from "./useGetCourse";
import { useTransfer } from "./useTransfer";

export const useTransferFromCardToCard = (
  fromCard: UserCard,
  toCard: UserCard,
  amount: number
) => {
  const { triggerTransfer: transferfromCard } = useTransfer();
  const { triggerTransfer: transferToCard } = useTransfer();

  const course = useGetCourse(fromCard.currency, toCard.currency);

  const triggerTransfer = () => {
    if (!course) return;

    transferfromCard(fromCard, +(fromCard.balance - amount).toFixed(2));
    transferToCard(toCard, toCard.balance + amount * course);
  };
  return { triggerTransfer };
};
