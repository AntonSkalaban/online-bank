import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const pages = [
  { name: "Main", path: "" },
  { name: "Catalog", path: "catalog" },
];

export const Nav = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return "nav__link " + (isActive ? "nav__link_active" : "");
  };

  return (
    <nav className="nav">
      {pages.map(({ name, path }) => {
        return (
          <div className="nav__item" key={path}>
            <NavLink className={setActive} to={"/" + path}>
              {name}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};
