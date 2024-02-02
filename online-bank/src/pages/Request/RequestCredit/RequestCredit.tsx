import React from "react";
import { GoBackBtn, SectionHeader, Typography, Wrapper } from "components/UI";
import { RequirementsDropdown } from "./RequirementsDropdown/RequirementsDropdown";
import "./style.css";

export const RequestCredit = () => {
  return (
    <div className="page request-credit">
      <Wrapper>
        <div className="request-credit__wrapper">
          <div className="request-credit__header">
            <SectionHeader size="big">
              <GoBackBtn />
              Request credit
            </SectionHeader>
          </div>
          <div className="request-credit__main">
            <div className="request-credit__title">
              <Typography color="black" size="big">
                Loans provided by Sber Bank OJSC are an opportunity to quickly
                and on favorable terms receive money for any needs.
              </Typography>
            </div>
            <RequirementsDropdown />
            <div className="request-credit__card"></div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
