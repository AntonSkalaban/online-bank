import React from "react";
import { useParams } from "react-router-dom";
import { productAPI } from "services/api";
import { LoadingSpinner } from "components/UI";
import { UserCard, UserCredit, UserDeposit } from "type";

export const withFetchingProduct = (
  Component: React.FC<{ product: UserCard | UserCredit | UserDeposit }>
) => {
  return () => {
    const { productType, id } = useParams();

    const { data, isFetching } = productAPI.useGetProductQuery({
      productType: productType ?? "",
      id: id ?? "",
    });

    if (isFetching) return <LoadingSpinner />;
    if (!data) return <></>;

    return <Component product={data} />;
  };
};
