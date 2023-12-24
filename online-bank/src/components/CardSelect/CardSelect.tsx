import React from "react";
import { UserCard } from "type";
import { Typography, Select } from "components/UI";

interface CardSelectProps {
  name: string;
  label: string;
  options: UserCard[];
  selectCard: UserCard;
  handleSelect: (card: Record<string, UserCard>) => void;
}

export const CardSelect: React.FC<CardSelectProps> = ({
  name,
  label,
  options,
  selectCard,
  handleSelect,
}) => {
  const handleSelectCard = (selectCardId: Record<string, string>) => {
    const [name, cardId] = Object.entries(selectCardId)[0];

    handleSelect({
      [name]: options.find((card) => card._id === cardId) as UserCard,
    });
  };

  return (
    <div className="cards-select">
      <Typography text={label} />
      <Select
        options={options as UserCard[]}
        name={name}
        checkedValue={selectCard}
        selectHandler={handleSelectCard}
      />
    </div>
  );
};
