import { UserCard } from "type";

export const removeSelectCardFromOptions = (
  cards: UserCard[],
  selectCardId: string
) => {
  return cards.filter(({ _id }) => _id !== selectCardId);
};
