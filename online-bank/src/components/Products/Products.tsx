import React from "react";
import { products } from "./const";
import { ProductsDropdown } from "./ProductsDropdown/ProductsDropdown";
import "./style.css";

interface ProductsProps {
  showAll?: boolean;
}
export const Products: React.FC<ProductsProps> = ({ showAll = true }) => {
  return (
    <section className="products">
      {products.map(({ name, type }, index) => {
        if (showAll) {
          return <ProductsDropdown key={name} title={name} type={type} />;
        }
        return (
          index < 1 && <ProductsDropdown key={name} title={name} type={type} />
        );
      })}
    </section>
  );
};
