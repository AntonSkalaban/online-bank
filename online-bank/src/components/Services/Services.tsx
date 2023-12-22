import React from "react";
import { ICardButton } from "type";
import { CardButtonsList } from "components/UI";
import "./style.css";

interface ServicesProps {
  btns: ICardButton[];
  children?: React.ReactNode;
}

export const Services: React.FC<ServicesProps> = ({ btns, children }) => {
  return (
    <section className="services">
      <CardButtonsList btns={btns} />
      {children}
    </section>
  );
};
