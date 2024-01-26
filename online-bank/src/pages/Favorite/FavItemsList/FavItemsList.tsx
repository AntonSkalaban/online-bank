import React from "react";
import { OperationsData } from "type";
import { FavItem } from "./FavItem/FavItem";
import "./style.css";

interface FavItemsListProps {
  data: OperationsData[];
}

export const FavItemsList: React.FC<FavItemsListProps> = ({ data }) => {
  return (
    <ul className="fav-items__list">
      {data.map(({ _id, ...rest }) => {
        return <FavItem key={_id} data={rest} />;
      })}
    </ul>
  );
};
