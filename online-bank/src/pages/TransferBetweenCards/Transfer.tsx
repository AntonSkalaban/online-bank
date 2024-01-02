import React from "react";
import { FetchingTransferBetweenForm } from "./TransferForm/TransferBetweenForm";
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
            Transfer between your accounts and cards
          </SectionHeader>

          <FetchingTransferBetweenForm />
        </section>
      </Wrapper>
    </div>
  );
};
