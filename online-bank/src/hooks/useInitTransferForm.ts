import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAction } from "./useAction";
import { useGetProductByParams } from "./useGetProductByParams";
import { UserCard } from "type";

export const useInitTransferForm = (cards: UserCard[]) => {
  const { updateTransferCards, clearTransferForm } = useAction();
  const { category } = useParams();
  const { data: defSelectCard } = useGetProductByParams();

  useEffect(() => {
    if (!defSelectCard) return;
    updateTransferCards({
      fromCard:
        category === "top-up"
          ? cards.filter((card) => card._id !== defSelectCard._id)[0]
          : (defSelectCard as UserCard),
      toCard:
        category === "from-up"
          ? cards.filter((card) => card._id !== defSelectCard._id)[0]
          : (defSelectCard as UserCard),
    });
    return () => {
      clearTransferForm();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
