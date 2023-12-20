import React from "react";
import { btns } from "./const";
import { Products } from "./Products/Products";
import { Sidebar, Services } from "components";
import { Wrapper } from "components/UI";
import "./style.css";

export const Main = () => {
  return (
    <div className="page main-page">
      <Services btns={btns} />
      <Wrapper>
        <div className="main-page__main">
          <Products />
          <Sidebar />
        </div>
      </Wrapper>
    </div>
  );
};
