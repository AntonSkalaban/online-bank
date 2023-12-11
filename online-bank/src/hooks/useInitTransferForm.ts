import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "./useAction";
import { useGetProductByParams } from "./useGetProductByParams";
import { UserCard } from "type";

export const useInitTransferForm = (cards: UserCard[]) => {
  const { updateTransferCards, clearTransferForm } = useAction();
  const { category } = useParams();
  const { data } = useGetProductByParams();

  useEffect(() => {
    if (category === "top-up" && !data) return;
    updateTransferCards({
      fromCard:
        category === "top-up"
          ? cards.filter((card) => card._id !== data?._id)[0]
          : cards[0],
      toCard: category === "top-up" ? (data as UserCard) : cards[1],
    });
    return () => {
      clearTransferForm();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
