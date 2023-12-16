import React from "react";
import { tabs } from "./const";
import { BankCoursesTable } from "./BankCoursesTable/BankCoursesTable";
import { NationalCoursesTable } from "./NationalCoursesTable/NationalCoursesTable";
import { Tabs } from "components";
import { SectionHeader } from "components/UI";

const coursesTable = {
  cards: <BankCoursesTable />,
  national: <NationalCoursesTable />,
};

export const Courses = () => {
  return (
    <section className="main__section courses">
      <SectionHeader title="Courses" size="small" />

      <Tabs tabs={tabs} selectedTab={tabs[0].name} child={coursesTable} />
    </section>
  );
};
