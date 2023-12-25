import React from "react";
import { CardCreationForm } from "./CardCreationForm/CardCreationForm";
import { CardsList } from "./CardsList/CardsList";
import { GoBackBtn, SectionHeader, Wrapper } from "components/UI";
import "./style.css";

export const RequestCard = () => {
  return (
    <div className="page request-card">
      <div className="request-card__header">
        <Wrapper>
          <div className="reqest-card__header-container">
            <div className="request-card__go-back-btn-container">
              <GoBackBtn />
            </div>

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
          <SectionHeader title="Specify card parameters" />

          <CardCreationForm />

          <CardsList />
        </section>
      </Wrapper>
    </div>
  );
};
