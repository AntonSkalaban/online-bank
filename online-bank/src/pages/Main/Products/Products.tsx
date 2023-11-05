import React, { useState } from "react";
import { SectionHeader } from "components/UI";
import { Dropdown } from "./Dropdown/Dropdown";
import "./style.css";

export const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const toggle = () => {
    setShowAll((prev) => !prev);
  };

  const data: { name: string; type: "cards" | "credits" | "deposits" }[] = [
    { name: "Cards", type: "cards" },
    { name: "Credits", type: "credits" },
    { name: "Deposits", type: "deposits" },
  ];

  return (
    <section className="main__section products">
      <SectionHeader title="Products" />
      <div className="products__dropdowns-list">
        {data.map(({ name, type }, index) => {
          if (showAll) {
            return <Dropdown key={name} name={name} type={type} />;
          }
          return index < 1 && <Dropdown key={name} name={name} type={type} />;
        })}
      </div>
      <p className="products__show-all" onClick={toggle}>
        {showAll ? "Hide all products" : "Show all products"}
      </p>
    </section>
  );
};
