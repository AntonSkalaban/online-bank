import React from "react";
import { btns } from "./const";
import { CardButtonsList } from "components/UI";
import "./style.css";

export const Services = () => {
  return (
    <section className="services section_gray">
      <CardButtonsList btns={btns} />
    </section>
  );
};
