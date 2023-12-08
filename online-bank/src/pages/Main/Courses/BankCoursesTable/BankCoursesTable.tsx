import React from "react";
import { Typography } from "components/UI";
import { currencies } from "./const";
import { BankCoursesRow } from "./BankCoursesRow/BankCoursesRow";
import "./style.css";

export const BankCoursesTable = () => {
  return (
    <div className="courses__bank-table">
      <div className="courses__curr">
        <Typography text="Currenсy" />
      </div>
      <div className="courses__purchase">
        <Typography text="Purchase" />
      </div>
      <div className="courses__purchase">
        <Typography text="Sale" />
      </div>

      {currencies.map(({ name, curr, img }) => {
        return <BankCoursesRow name={name} curr={curr} img={img} key={curr} />;
      })}
    </div>
  );
};
