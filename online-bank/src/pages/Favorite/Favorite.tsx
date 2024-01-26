import React from "react";
import { historyAPI } from "services/api";
import { Products } from "components";
import { GoBack, SectionHeader, Wrapper } from "components/UI";
import { FavItemsList } from "./FavItemsList/FavItemsList";
import "./style.css";

export const Favorite = () => {
  const { data, isFetching } = historyAPI.useGetHistoryQuery("favorite");

  if (!data) return;

  return (
    <div className="page favorite-page">
      <Wrapper>
        <div className="favorite-page__container">
          <div className="favorite__products-wrapper products-wrapper">
            <Products />
          </div>

          <div className="favorite-page__main">
            <GoBack />
            <SectionHeader size="big" title="Favorite transfers" />
            <FavItemsList data={data} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
