import React, { useRef, useState } from "react";
import { UseFormRegister, useFormContext } from "react-hook-form";
import { useOnClickOutside } from "hooks";
import { FormValues, UserCard } from "type";
import { SelectOption } from "./SelectOption/SelectOption";
import { SelectStringItem } from "./SelectItems/StringItem/StringItem";
import { SelectCardItem } from "./SelectItems/CardItem/CardItem";
import Checkmark from "assets/svg/checkmark.svg";
import "./style.css";

interface SelectProps {
  name: string;
  options: string[] | UserCard[];
}

export const Select: React.FC<SelectProps> = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const { watch } = useFormContext();

  const checkedValue = watch(name);

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

              return (
                <SelectOption key={value} name={name} value={value}>
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
