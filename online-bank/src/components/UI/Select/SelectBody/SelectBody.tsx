import React, { useContext } from "react";
import { UserCard } from "type";
import { DropdownContext, items } from "components/UI";
import { SelectOption } from "./SelectOption/SelectOption";
import "./style.css";

interface SelectBodyProps {
  name: string;
  options: string[] | UserCard[];
  optionType?: "card" | "string";
}

export const SelectBody: React.FC<SelectBodyProps> = ({
  name,
  options,
  optionType = "string",
}) => {
  const { isOpen } = useContext(DropdownContext);

  if (!isOpen) return null;

  return (
    <div className="select__body">
      <ul className="select__list">
        {options.map((option) => {
          const isOptionString = optionType === "string";

          return (
            <SelectOption
              key={
                isOptionString ? (option as string) : (option as UserCard)._id
              }
              name={name}
              value={option}
            >
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {items[optionType](option as any)}
            </SelectOption>
          );
        })}
      </ul>
    </div>
  );
};
