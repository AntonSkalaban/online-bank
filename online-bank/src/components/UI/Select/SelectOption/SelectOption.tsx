import React, { ReactNode } from "react";

interface SelectOptionProps {
  name: string;
  isChecked: boolean;
  value: string;
  children?: ReactNode;
  selectHandler: (val: Record<string, string>) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  value,
  isChecked,
  children,
  selectHandler,
}) => {
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectHandler({ [name]: e.target.value });
  };

  return (
    <li className={`select__item ${isChecked && "select__item_checked"}`}>
      <label className="select__item-label">
        <input
          className="list__input"
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={hanldeChange}
        />
        {children}
      </label>
    </li>
  );
};
