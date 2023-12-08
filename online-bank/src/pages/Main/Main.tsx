import React from "react";
import { Services } from "./Services/Services";
import { Products } from "./Products/Products";
import { Courses } from "./Courses/Courses";
import { Wrapper } from "components/UI/Wrapper/Wrapper";
import "./style.css";

export const Main = () => {
  return (
    <div className="page main-page">
      <Services />
      <Wrapper>
        <Products />
        <Courses />
      </Wrapper>
    </div>
  );
};
