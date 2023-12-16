import React from "react";
import { Typography } from "components/UI";
import { currencies } from "./const";
import { NationalCoursesRow } from "./NationalCoursesRow/NationalCoursesRow";
import "./style.css";

export const NationalCoursesTable = () => {
  return (
    <div className="courses__national-table">
      <div className="courses__national-row">
        <Typography text="Currenсy" />
        <Typography text="Official exchange rate" />
      </div>

      {currencies.map(({ name, curr, img }) => {
        return (
          <NationalCoursesRow name={name} curr={curr} img={img} key={curr} />
        );
      })}
    </div>
  );
};
