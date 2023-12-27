import React from "react";
import { useFormContext } from "react-hook-form";
import { removeSelectCardFromOptions } from "helpers";
import { UserCard } from "type";
import { CardSelect } from "components";
import Swap from "assets/svg/arrow-swap.svg";
import "./style.css";

interface CardsSelectProps {
  cards: UserCard[];
}

export const CardsSelect: React.FC<CardsSelectProps> = ({ cards }) => {
  const { watch, setValue } = useFormContext();

  const [fromCard, toCard] = watch([
    "selectCards.fromCard",
    "selectCards.toCard",
  ]);

  const swapCards = () => {
    setValue("selectCards.fromCard", toCard);
    setValue("selectCards.toCard", fromCard);
  };

  const fromCardOptios = removeSelectCardFromOptions(cards, toCard._id);
  const toCardOptions = removeSelectCardFromOptions(cards, fromCard._id);

  return (
    <div className="cards-select-block">
      <CardSelect
        name="selectCards.fromCard"
        label="From card"
        options={fromCardOptios}
      />
      <img className="swap-cards" src={Swap} onClick={swapCards} />
      <CardSelect
        name="selectCards.toCard"
        label="To card"
        options={toCardOptions}
      />
    </div>
  );
};
