import React from "react";
import { btns } from "./const";
import { ProductsSection } from "./ProductsSection/ProductsSection";
import { Sidebar, Services } from "components";
import { Wrapper } from "components/UI";
import "./style.css";

export const Main = () => {
  return (
    <div className="page main-page">
      <div className="grey-row">
        <Services btns={btns} />
      </div>
      <Wrapper>
        <div className="main-page__main">
          <ProductsSection />
          <Sidebar />
        </div>
      </Wrapper>
    </div>
  );
};
