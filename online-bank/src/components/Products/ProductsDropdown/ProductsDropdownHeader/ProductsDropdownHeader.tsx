import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProdyctType } from "type";
import { Dropdown, DropdownContext } from "components/UI";
import Plus from "assets/svg/plus.svg";

interface ProductsDropdownHeaderProps {
  title: string;
  type: ProdyctType;
}

export const ProductsDropdownHeader: React.FC<ProductsDropdownHeaderProps> = ({
  title,
  type,
}) => {
  const { toggle } = useContext(DropdownContext);

  return (
    <div className="dropdown__header">
      <div className="dropdown__toggle" onClick={toggle}>
        <h3 className="dropdown__title">{title}</h3>
        <Dropdown.Checkmark />
      </div>
      <NavLink to={"/request/" + type}>
        <span className="dropdown__plus-contaiener">
          <img src={Plus} />
        </span>
      </NavLink>
    </div>
  );
};
