import React from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useAction } from "hooks";
import { removeSelectCardFromOptions } from "helpers";
import { UserCard } from "type";
import { CardSelect } from "components";
import Swap from "assets/svg/arrow-swap.svg";
import "./style.css";

interface CardsSelectProps {
  cards: UserCard[];
}

export const CardsSelect: React.FC<CardsSelectProps> = ({ cards }) => {
  const { updateTransferCards } = useAction();

  const {
    selectCards: { fromCard, toCard },
  } = useSelector(getTransferFormData);

  const swapCards = () => {
    updateTransferCards({
      fromCard: toCard,
      toCard: fromCard,
    });
  };

  const fromCardOptios = removeSelectCardFromOptions(cards, toCard._id);
  const toCardOptions = removeSelectCardFromOptions(cards, fromCard._id);

  return (
    <div className="cards-select-block">
      <CardSelect
        name="fromCard"
        label="From card"
        options={fromCardOptios}
        selectCard={fromCard}
        handleSelect={updateTransferCards}
      />
      <img className="swap-cards" src={Swap} onClick={swapCards} />
      <CardSelect
        name="toCard"
        label="To card"
        options={toCardOptions}
        selectCard={toCard}
        handleSelect={updateTransferCards}
      />
    </div>
  );
};
