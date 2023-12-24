import React from "react";
import { withFetchingProduct } from "hoc";
import { UserCard, UserCredit, UserDeposit } from "type";
import { CardSection } from "./CardSection/CardSection";
import { CardTable } from "./CardTable/CardTable";
import { Wrapper } from "components/UI";
export interface ProductPageProps {
  product: UserCard | UserDeposit | UserCredit;
}
export const Card: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="page card-page">
      <CardSection card={product as UserCard} />
      <Wrapper>
        <CardTable card={product as UserCard} />
      </Wrapper>
    </div>
  );
};

export const FetchingCardPage = withFetchingProduct(Card);
