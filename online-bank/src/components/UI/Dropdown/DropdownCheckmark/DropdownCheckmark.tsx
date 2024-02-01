import React, { useContext } from "react";
import { DropdownContext } from "../Dropdown";
import Checkmark from "assets/svg/checkmark.svg";
import "./style.css";

export const DropdownCheckmark = () => {
  const { isOpen } = useContext(DropdownContext);

  return (
    <span
      className={`dropdown__checkmark ${
        isOpen ? "dropdown__checkmark_active" : ""
      }`}
    >
      <img src={Checkmark} />
    </span>
  );
};
