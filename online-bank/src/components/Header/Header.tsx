import React from "react";
import { Nav } from "./Nav/Nav";
import Logo from "assets/svg/logo.svg";
import { Wrapper } from "components/UI";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__wrapper">
          <div className="logo__container">
            <img className="logo" src={Logo} />
          </div>
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};
