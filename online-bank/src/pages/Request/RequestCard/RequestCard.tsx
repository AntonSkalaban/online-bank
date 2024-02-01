import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Currency, PaymentSystem } from "type";
import { CardCreationForm } from "./CardCreationForm/CardCreationForm";
import { CardsList } from "./CardsList/CardsList";
import { GoBackBtn, SectionHeader, Wrapper } from "components/UI";
import "./style.css";

export interface DefCardFilter {
  currency: Currency;
  paymentSystem: PaymentSystem;
  isVirtual: boolean;
}

export const RequestCard = () => {
  const methods = useForm({
    defaultValues: {
      cardFilter: {
        currency: "USD",
        paymentSystem: "Visa",
        isVirtual: false,
      } as DefCardFilter,
      isSubmit: false,
    },
    criteriaMode: "all",
    mode: "onChange",
  });

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
        <SectionHeader title="Specify card parameters" />
        <FormProvider {...methods}>
          <form className="request-card__form">
            <CardCreationForm />

            <CardsList />
          </form>
        </FormProvider>
      </Wrapper>
    </div>
  );
};
