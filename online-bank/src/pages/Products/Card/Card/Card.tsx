import React from "react";
import { withFetchingProduct } from "hok";
import { UserCard, UserCredit, UserDeposit } from "type";
import { btns } from "./CardSection/const";
import { Wrapper } from "components/UI";
import { CardImage } from "./CardSection/CardImage/CardImage";
import { CardButtonsList } from "components";
import "./style.css";
import { CardSection } from "./CardSection/CardSection";

export interface ProductPageProps {
  product: UserCard | UserDeposit | UserCredit;
}
export const Card: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="page card-page">
      <CardSection card={product as UserCard} />
    </div>
  );
};

export const FetchingCardPage = withFetchingProduct(Card);
