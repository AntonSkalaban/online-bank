import React from "react";
import { products } from "./const";
import { Dropdown } from "./Dropdown/Dropdown";
import "./style.css";

interface ProductsProps {
  showAll?: boolean;
}
export const Products: React.FC<ProductsProps> = ({ showAll = true }) => {
  return (
    <section className="products">
      {products.map(({ name, type }, index) => {
        if (showAll) {
          return <Dropdown key={name} name={name} type={type} />;
        }
        return index < 1 && <Dropdown key={name} name={name} type={type} />;
      })}
    </section>
  );
};
