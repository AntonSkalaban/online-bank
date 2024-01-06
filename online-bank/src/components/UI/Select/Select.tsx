import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useOnClickOutside } from "hooks";
import { UserCard } from "type";
import { SelectOption } from "./SelectOption/SelectOption";
import { SelectStringItem } from "./SelectItems/StringItem/StringItem";
import { SelectCardItem } from "./SelectItems/CardItem/CardItem";
import Checkmark from "assets/svg/checkmark.svg";
import "./style.css";

interface SelectProps {
  name: string;
  options: string[] | UserCard[];
  optionType?: "card" | "string";
}

const items = {
  string: (label: string) => <SelectStringItem label={label} />,
  card: (card: UserCard) => <SelectCardItem card={card} />,
};

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  optionType = "string",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { watch } = useFormContext();

  const dropdownRef = useRef(null);

  const checkedValue = watch(name);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="select" ref={dropdownRef}>
      <div className="border_grey">
        <div className="select__toggle" onClick={toggle}>
          {items[optionType](checkedValue)}
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
              const isOptionString = optionType === "string";

              return (
                <SelectOption
                  key={
                    isOptionString
                      ? (option as string)
                      : (option as UserCard)._id
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
      )}
    </div>
  );
};
