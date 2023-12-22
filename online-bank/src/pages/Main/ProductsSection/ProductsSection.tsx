import React, { useState } from "react";
import { Products } from "components";
import { SectionHeader } from "components/UI";
import "./style.css";

export const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="main__section products">
      <SectionHeader title="Products" />
      <Products showAll={showAll} />
      <p className="products__show-all" onClick={toggle}>
        {showAll ? "Hide all products" : "Show all products"}
      </p>
    </section>
  );
};
