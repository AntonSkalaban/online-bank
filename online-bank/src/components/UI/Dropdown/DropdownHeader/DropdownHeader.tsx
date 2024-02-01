import React, { useContext } from "react";
import { Dropdown, DropdownContext } from "../Dropdown";
import { Typography } from "components/UI";
import "./style.css";

interface DropdownHeaderProps {
  title: string;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({ title }) => {
  const { toggle } = useContext(DropdownContext);

  return (
    <div className="dropdown__header dropdown__header_border" onClick={toggle}>
      <Typography color="black" size="big" weight="strong">
        {title}
      </Typography>{" "}
      <Dropdown.Checkmark />
    </div>
  );
};
