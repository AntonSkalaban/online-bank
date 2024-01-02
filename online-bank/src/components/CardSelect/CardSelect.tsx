import React from "react";
import { UserCard } from "type";
import { Typography, Select } from "components/UI";

interface CardSelectProps {
  name: string;
  label: string;
  options: UserCard[];
}

export const CardSelect: React.FC<CardSelectProps> = ({
  name,
  label,
  options,
}) => {
  return (
    <div className="cards-select">
      <Typography text={label} />
      <Select optionType="card" options={options as UserCard[]} name={name} />
    </div>
  );
};
