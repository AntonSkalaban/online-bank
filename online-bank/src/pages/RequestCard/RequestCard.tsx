import React, { useState } from "react";
import { CardCreationForm } from "./CardCreationForm/CardCreationForm";
import { CardsList } from "./CardsList/CardsList";
import { AgreementCheckbox } from "./AgreementCheckbox/AgreementCheckbox";
import { GoBackArrow, SectionHeader, Wrapper } from "components/UI";
import "./style.css";

export const RequestCard = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const hanldeChange = () => {
    setIsConfirm((prev) => !prev);
  };
  return (
    <div className="page request-card">
      <div className="request-card__header">
        <Wrapper>
          <div className="reqest-card__header-wrapper">
            <GoBackArrow />
            <div className="request-card__cards">
              <div className="request-card__front-card">
                <span>New card</span>
              </div>
              <div className="request-card__back-card"></div>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <section className="request-card__section">
          <SectionHeader title="Specify card parameters" type="big" />

          <CardCreationForm />

          <AgreementCheckbox
            isChecked={isConfirm}
            handleChanhe={hanldeChange}
          />
          <CardsList isConfirm={isConfirm} />
        </section>
      </Wrapper>
    </div>
  );
};
