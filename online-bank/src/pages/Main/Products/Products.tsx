import React, { useState } from "react";
import { Dropdown } from "components";
import "./style.css";

export const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const toggle = () => {
    setShowAll((prev) => !prev);
  };

  const data = ["Cards", "Credits", "Deposits"];

  return (
    <section className="main__section products">
      <div className="section__header">
        <h3 className="section__title">Products</h3>
      </div>
      <div className="products__dropdowns-list">
        {data.map((name, index) => {
          if (showAll) {
            return <Dropdown key={name} name={name} />;
          }
          return index < 1 && <Dropdown key={name} name={name} />;
        })}
      </div>
      <p className="products__show-all" onClick={toggle}>
        {showAll ? "Hide all products" : "Show all products"}
      </p>
    </section>
  );
};
