import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "./useAction";
import { useGetProductByParams } from "./useGetProductByParams";
import { UserCard } from "type";

export const useGetTransferCards = (cards: UserCard[]) => {
  const { updateTransferCards } = useAction();
  const { category } = useParams();
  const { data: defSelectCard } = useGetProductByParams();

  useEffect(() => {
    if (!defSelectCard) return;
    updateTransferCards({
      fromCard:
        category === "top-up"
          ? (defSelectCard as UserCard)
          : cards.filter((card) => card._id !== defSelectCard._id)[0],
      toCard:
        category === "from-up"
          ? (defSelectCard as UserCard)
          : cards.filter((card) => card._id !== defSelectCard._id)[0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
