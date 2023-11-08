import React from "react";
import { btns } from "./const";
import { CardButtonsList } from "components/CardButtonsList/CardButtonsList";
import "./style.css";

export const Services = () => {
  return (
    <section className="services section_gray">
      <CardButtonsList btns={btns} />
    </section>
  );
};
