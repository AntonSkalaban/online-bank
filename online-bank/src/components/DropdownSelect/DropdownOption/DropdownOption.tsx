import React, { ReactNode } from "react";

interface DropdownOptionProps {
  name: string;
  isChecked: boolean;
  value: string;
  children?: ReactNode;
  selectHandler: (val: Record<string, string>) => void;
}

export const DropdownOption: React.FC<DropdownOptionProps> = ({
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
    <li
      className={`select-dropdown__item ${
        isChecked && "select-dropdown__item_checked"
      }`}
    >
      <label className="select-dropdown__item-label">
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
