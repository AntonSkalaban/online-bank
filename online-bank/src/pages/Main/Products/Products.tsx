import React, { useState } from "react";
import "./style.css";
import { Dropdown } from "components";
import { Card, Credit } from "type/type";

const data = [
  {
    title: "Cards",
    data: [
      {
        paymentSystem: "Visa",
        name: "VISA",
        date: new Date(),
        period: 24,
        currency: "USD",
        balance: 131.22,
        number: 123112412412412,
        cvv: 33,
      },
      {
        paymentSystem: "Visa",
        name: "VISA CLASSIC",
        date: new Date(),
        period: 24,
        currency: "USD",
        balance: 131.22,
        number: 123112412412412,
        cvv: 33,
      },
    ] as Card[],
  },
  {
    title: "Credits",
    data: [
      {
        name: "На недвижимость",
        date: new Date(),
        period: 240,
        currency: "USD",
        balance: 30000,
        rate: 5.2,
      },
    ] as Credit[],
  },
  { title: "Deposits", data: [] as Card[] },
];

export const Products = () => {
  const [showAll, setShowAll] = useState(false);

  const toggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="main__section products">
      <div className="section__header">
        <h3 className="section__title">Products</h3>
      </div>
      <div className="products__dropdowns-list">
        {data.map(({ title, data }, index) => {
          if (showAll) {
            return <Dropdown key={title} title={title} data={data} />;
          }
          return (
            index < 1 && <Dropdown key={title} title={title} data={data} />
          );
        })}
      </div>
      <p className="products__show-all" onClick={toggle}>
        {showAll ? "Hide all products" : "Show all products"}
      </p>
    </section>
  );
};
