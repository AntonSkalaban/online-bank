import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useAction } from "./useAction";
import { useGetProductByParams } from "./useGetProductByParams";
import { UserCard } from "type";

export const useInitTransferForm = (cards: UserCard[]) => {
  const { updateTransferCards, clearTransferForm, initCheckbox } = useAction();
  const { data: rechargeableCard } = useGetProductByParams();

  const {
    selectCards: { fromCard, toCard },
  } = useSelector(getTransferFormData);

  useEffect(() => {
    if (!rechargeableCard) return;

    updateTransferCards({
      fromCard: cards[0]._id !== rechargeableCard?._id ? cards[0] : cards[1],
      toCard: rechargeableCard as UserCard,
    });
    return () => {
      clearTransferForm();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!fromCard || !toCard) return;
    initCheckbox();
  }, [fromCard, initCheckbox, toCard]);
};
