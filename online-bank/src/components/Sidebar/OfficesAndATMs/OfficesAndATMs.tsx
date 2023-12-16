import React from "react";
import { NavLink } from "react-router-dom";
import { SectionHeader, Typography } from "components/UI";
import Map from "assets/svg/map.svg";
import "./style.css";

export const OfficesAndATMs = () => {
  return (
    <section className="sidebar__section main__section offices-and-atms">
      <SectionHeader title="Offices and ATMs" size="small" />

      <NavLink className="offices-and-atms__link" to="/map">
        <div className={`offices-and-atms__img-container`}>
          <img src={Map} />
        </div>
        <Typography
          color="black"
          size="big"
          weight="strong"
          text="On the map"
        />
      </NavLink>
    </section>
  );
};
