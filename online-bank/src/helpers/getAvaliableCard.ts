import { cards } from "const/cards";
import { DefCardFilter } from "pages/index";

export const getAvaliableCards = (filteredParams: DefCardFilter) => {
  return cards.filter((card) => {
    return (
      card.currency === filteredParams.currency &&
      card.paymentSystem === filteredParams.paymentSystem &&
      card.isVirtual === filteredParams.isVirtual
    );
  });
};
