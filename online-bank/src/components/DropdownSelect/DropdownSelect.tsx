import React, { useRef, useState } from "react";
import { useOnClickOutside } from "hooks";
import Checkmark from "assets/svg/checkmark.svg";
import "./style.css";

interface DropdownSelectProps {
  options: string[];
  name: string;
  checkedValue: string | number;
  selectHandler: (val: Record<string, string | number | boolean>) => void;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  name,
  checkedValue,
  selectHandler,
}) => {
  const dropdownRed = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(dropdownRed, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    selectHandler({ [target.name]: target.value });
  };

  return (
    <div className="select-dropdown" ref={dropdownRed}>
      <div className="select-dropdown__header">
        <div className="select-dropdown__toggle" onClick={toggle}>
          <p className="select-dropdown__title">{checkedValue}</p>
          <span
            className={
              "dropdown__checkmark " +
              (isOpen ? "dropdown__checkmark_active" : "")
            }
          >
            <img src={Checkmark} />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="select-dropdown__body">
          <ul className="select-dropdown__list">
            {options.map((option) => {
              const isChecked = checkedValue === option;
              return (
                <li
                  className={`select-dropdown__item ${
                    isChecked && "select-dropdown__item_checked"
                  }`}
                  key={option}
                >
                  <label className="select-dropdown__item-label">
                    <input
                      className="list__input"
                      type="radio"
                      name={name}
                      value={option}
                      checked={isChecked}
                      onChange={hanldeChange}
                    />
                    {option}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
