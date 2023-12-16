import React from "react";
import { Services } from "./Services/Services";
import { Products } from "./Products/Products";
import { Sidebar } from "components";
import { Wrapper } from "components/UI";
import "./style.css";

export const Main = () => {
  return (
    <div className="page main-page">
      <Services />
      <Wrapper>
        <div className="main-page__main">
          <Products />
          <Sidebar />
        </div>
      </Wrapper>
    </div>
  );
};
