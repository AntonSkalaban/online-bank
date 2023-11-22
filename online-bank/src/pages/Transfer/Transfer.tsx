import React from "react";
import { FetchingTransferForm } from "./TransferForm/TransferForm";
import { SectionHeader, Wrapper } from "components/UI";
import "./style.css";

export const Transfer = () => {
  return (
    <div className="page transfer-page">
      <Wrapper>
        <section>
          <SectionHeader title={"Transfer between your accounts and cards"} />
          <FetchingTransferForm />
        </section>
      </Wrapper>
    </div>
  );
};
