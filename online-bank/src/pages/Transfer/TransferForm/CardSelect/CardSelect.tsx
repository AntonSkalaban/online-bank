import React from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useAction } from "hooks";
import { removeSelectCardFromOptions } from "helpers";
import { UserCard } from "type";
import { DropdownSelect } from "components";
import { Typography } from "components/UI";
import Swap from "assets/svg/arrow-swap.svg";
import "./style.css";

interface CardSelectProps {
  cards: UserCard[];
}

export const CardSelect: React.FC<CardSelectProps> = ({ cards }) => {
  const { updateTransferCards } = useAction();

  const {
    selectCards: { fromCard, toCard },
  } = useSelector(getTransferFormData);

  const selectCard = (selectCardId: Record<string, string>) => {
    const [name, cardId] = Object.entries(selectCardId)[0];

    updateTransferCards({
      [name]: cards.find((card) => card._id === cardId) as UserCard,
    });
  };

  const swapCards = () => {
    updateTransferCards({
      fromCard: toCard,
      toCard: fromCard,
    });
  };

  const fromCards = removeSelectCardFromOptions(cards, toCard._id);
  const toCards = removeSelectCardFromOptions(cards, fromCard._id);

  return (
    <div className="cards-select-block">
      <Typography text="From card" />
      <DropdownSelect
        options={fromCards as UserCard[]}
        name={"fromCard"}
        checkedValue={fromCard}
        selectHandler={selectCard}
      />
      <img className="swap-cards" src={Swap} onClick={swapCards} />
      <Typography text="To card" />
      <DropdownSelect
        options={toCards as UserCard[]}
        name={"toCard"}
        checkedValue={toCard}
        selectHandler={selectCard}
      />
    </div>
  );
};
