import React from "react";
import { products } from "./const";
import { Dropdown } from "./Dropdown/Dropdown";

interface ProductsDropdownsProps {
  showAll?: boolean;
}
export const ProductsDropdowns: React.FC<ProductsDropdownsProps> = ({
  showAll = true,
}) => {
  return (
    <div className="products__dropdowns-list">
      {products.map(({ name, type }, index) => {
        if (showAll) {
          return <Dropdown key={name} name={name} type={type} />;
        }
        return index < 1 && <Dropdown key={name} name={name} type={type} />;
      })}
    </div>
  );
};
