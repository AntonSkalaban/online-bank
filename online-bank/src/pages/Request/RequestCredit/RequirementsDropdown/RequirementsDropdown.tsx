import React from "react";
import { Dropdown } from "components/UI";
import { data } from "./const";
import "./style.css";

export const RequirementsDropdown = () => {
  return (
    <Dropdown
      isDefOpen={false}
      additionalClass="border-dropdown request-credit__dropdown"
    >
      <Dropdown.Header title="Mandatory requirements for obtaining a loan" />
      <Dropdown.Body>
        {" "}
        <ul className="request-credit__dropdown-list">
          {data.map((text) => {
            return (
              <li className="request-credit__dropdown-item" key={text}>
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </Dropdown.Body>
    </Dropdown>
  );
};
