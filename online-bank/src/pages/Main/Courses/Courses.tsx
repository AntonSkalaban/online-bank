import React, { useState } from "react";
import { SectionHeader, Typography } from "components/UI";
import "./style.css";
import { BankCoursesTable } from "./BankCoursesTable/BankCoursesTable";
import { NationalCoursesTable } from "./NationalCoursesTable/NationalCoursesTable";

interface CourseType {
  title: string;
  name: "cards" | "national";
}
const navs: CourseType[] = [
  { title: "National bank courses", name: "national" },
  { title: "Cards", name: "cards" },
];

const coursesTable = {
  cards: <BankCoursesTable />,
  national: <NationalCoursesTable />,
};
export const Courses = () => {
  const [selectedCategory, setSelectCategory] = useState(navs[0].name);
  return (
    <section className="main__section courses">
      <SectionHeader title="Courses" />

      <ul className="courses__nav">
        {navs.map(({ title, name }) => {
          const isActive = selectedCategory === name;
          return (
            <li
              key={name}
              className={`nav__item courses__nav-item nav__link  ${
                isActive ? "nav__link_active" : ""
              }`}
              onClick={() => setSelectCategory(name)}
            >
              <Typography
                color={isActive ? "black" : "grey"}
                size="big"
                weight="strong"
                text={title}
              />
            </li>
          );
        })}
      </ul>

      <div className="courses__bank-table">
        {coursesTable[selectedCategory]}
      </div>
    </section>
  );
};
