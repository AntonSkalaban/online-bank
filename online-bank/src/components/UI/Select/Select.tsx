import React, { useRef, useState } from "react";
import { useOnClickOutside } from "hooks";
import { UserCard } from "type";
import { SelectStringItem } from "./SelectItems/StringItem/StringItem";
import { SelectCardItem } from "./SelectItems/CardItem/CardItem";
import Checkmark from "assets/svg/checkmark.svg";
import "./style.css";
import { SelectOption } from "./SelectOption/SelectOption";

interface SelectProps {
  options: string[] | UserCard[];
  name: string;
  checkedValue: string | UserCard;
  selectHandler: (val: Record<string, string>) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  name,
  checkedValue,
  selectHandler,
}) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="select" ref={dropdownRef}>
      <div className="border_grey">
        <div className="select__toggle" onClick={toggle}>
          {typeof checkedValue === "string" ? (
            <SelectStringItem label={checkedValue} />
          ) : (
            <SelectCardItem card={checkedValue} />
          )}
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
        <div className="select__body">
          <ul className="select__list">
            {options.map((option) => {
              const value = typeof option === "string" ? option : option._id;
              const isChecked = value === checkedValue;

              return (
                <SelectOption
                  key={value}
                  name={name}
                  value={value}
                  isChecked={isChecked}
                  selectHandler={selectHandler}
                >
                  {typeof option === "string" ? (
                    <SelectStringItem label={value} />
                  ) : (
                    <SelectCardItem card={option as UserCard} />
                  )}
                </SelectOption>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
