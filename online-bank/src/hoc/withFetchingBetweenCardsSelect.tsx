import React from "react";
import { productAPI } from "services/api";
import { LoadingSpinner } from "components/UI";
import { ProdyctType, UserCard } from "type";
import { useParams } from "react-router-dom";
import { useGetProductByParams } from "hooks/useGetProductByParams";

export const withFetchingBetweenCardsSelect =
  (productType: ProdyctType) =>
  (
    Component: React.ComponentType<{
      cards: UserCard[];
      topUpCard?: UserCard;
    }>
  ) => {
    return () => {
      const { id } = useParams();

      const { data: topUpCard, isFetching: isTopUpCardFetching } =
        useGetProductByParams();

      const { data: cards, isFetching: isCardsFetching } =
        productAPI.useGetProductsQuery(productType);

      if (isCardsFetching || isTopUpCardFetching) return <LoadingSpinner />;
      if (!cards || cards.length < 2) return <></>;
      if (id && !topUpCard) return <></>;

      return (
        <Component
          cards={cards as UserCard[]}
          topUpCard={topUpCard as UserCard | undefined}
        />
      );
    };
  };
