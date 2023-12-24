import React from "react";
import { FetchingTransferForm } from "./TransferForm/TransferForm";
import { GoBackBtn, SectionHeader, Wrapper } from "components/UI";
import "./style.css";

export const Transfer = () => {
  return (
    <div className="page transfer-page">
      <Wrapper>
        <section>
          <SectionHeader size="big">
            {" "}
            <GoBackBtn />
            <span> Transfer between your accounts and cards</span>
          </SectionHeader>
          <FetchingTransferForm />
        </section>
      </Wrapper>
    </div>
  );
};
