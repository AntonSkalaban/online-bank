import React from "react";
import { Services } from "./Services/Services";
import "./style.css";

import { Wrapper } from "components/UI/Wrapper/Wrapper";
import { Products } from "./Products/Products";

export const Main = () => {
  return (
    <div className="page main-page">
      <Services />
      <Wrapper>
        <Products />
      </Wrapper>
    </div>
  );
};
