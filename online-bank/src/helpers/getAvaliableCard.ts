import { DefaultCard } from "type/type";
import { cards } from "const/cards";

export const getAvaliableCards = (filteredParams: DefaultCard) => {
  return cards.filter((card) => {
    return (
      card.currency === filteredParams.currency &&
      card.paymentSystem === filteredParams.paymentSystem &&
      card.isVirtual === filteredParams.isVirtual
    );
  });
};
