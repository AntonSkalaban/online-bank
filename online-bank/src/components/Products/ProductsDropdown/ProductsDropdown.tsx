import React from "react";
import { ProdyctType } from "type";
import { Dropdown } from "components/UI";
import "./style.css";

interface ProductsDropdownProps {
  title: string;
  type: ProdyctType;
}

export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  title,
  type,
}) => {
  return (
    <Dropdown
      additionalClass="products-dropdown__wrapper"
      isDefOpen={type === "cards"}
    >
      <Dropdown.ProductsHeader title={title} type={type} />
      <Dropdown.ProductsBody type={type} />
    </Dropdown>
  );
};
