import React from "react";
import { Courses } from "./Courses/Courses";
import { OfficesAndATMs } from "./OfficesAndATMs/OfficesAndATMs";
import "./style.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Courses />
      <OfficesAndATMs />
    </aside>
  );
};
