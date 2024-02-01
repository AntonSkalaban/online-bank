import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { Dropdown, DropdownContext, items } from "components/UI";
import "./style.css";

interface SelectHeaderProps {
  name: string;
  optionType?: "card" | "string";
}

export const SelectHeader: React.FC<SelectHeaderProps> = ({
  name,
  optionType = "string",
}) => {
  const { toggle } = useContext(DropdownContext);
  const { watch } = useFormContext();

  const checkedValue = watch(name);

  return (
    <div className="border_grey">
      <div className="select__toggle" onClick={toggle}>
        {items[optionType](checkedValue)}
        <Dropdown.Checkmark />
      </div>
    </div>
  );
};
