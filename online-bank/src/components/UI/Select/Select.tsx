import React from "react";
import { UserCard } from "type";
import { SelectStringItem } from "./SelectItems/StringItem/StringItem";
import { SelectCardItem } from "./SelectItems/CardItem/CardItem";
import { Dropdown } from "../Dropdown/Dropdown";
import "./style.css";

interface SelectProps {
  name: string;
  options: string[] | UserCard[];
  optionType?: "card" | "string";
}

export const items = {
  string: (label: string) => <SelectStringItem label={label} />,
  card: (card: UserCard) => <SelectCardItem card={card} />,
};

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  optionType = "string",
}) => {
  return (
    <Dropdown
      additionalClass="select"
      isDefOpen={true}
      shouldCloseOnClickOutside
    >
      <Dropdown.SelectHeader name={name} optionType={optionType} />
      <Dropdown.SelectBody
        name={name}
        options={options}
        optionType={optionType}
      />
    </Dropdown>
  );
};
