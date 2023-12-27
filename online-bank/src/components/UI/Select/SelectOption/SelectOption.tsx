import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface SelectOptionProps {
  name: string;
  value: string;
  children: ReactNode;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  value,
  children,
}) => {
  const { watch, register } = useFormContext();

  const checkedValue = watch(name);

  const isChecked = value === checkedValue;

  return (
    <li className={`select__item ${isChecked && "select__item_checked"}`}>
      <label className="select__item-label">
        <input
          className="list__input"
          type="radio"
          value={value}
          {...register(name)}
        />
        {children}
      </label>
    </li>
  );
};
