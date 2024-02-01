import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { UserCard } from "type";

interface SelectOptionProps {
  name: string;
  value: string | UserCard;

  children: ReactNode;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  value,
  children,
}) => {
  const { watch, setValue } = useFormContext();

  const checkedValue = watch(name) as string | UserCard;

  const isChecked =
    typeof value === "string"
      ? value === checkedValue
      : (value as UserCard)._id === (checkedValue as UserCard)._id;

  return (
    <li className={`select__item ${isChecked && "select__item_checked"}`}>
      <label className="select__item-label">
        <input
          className="list__input"
          type="radio"
          value={
            typeof value === "string"
              ? (value as string)
              : (value as UserCard)._id
          }
          onChange={() => setValue(name, value)}
        />
        {children}
      </label>
    </li>
  );
};
