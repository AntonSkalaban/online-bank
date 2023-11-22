import React from "react";
import { useGetProductByParams } from "hooks";
import { UserCard, UserCredit, UserDeposit } from "type";
import { LoadingSpinner } from "components/UI";

export const withFetchingProduct = (
  Component: React.FC<{ product: UserCard | UserCredit | UserDeposit }>
) => {
  return () => {
    const { data, isFetching } = useGetProductByParams();

    if (isFetching) return <LoadingSpinner />;
    if (!data) return <></>;

    return <Component product={data} />;
  };
};
