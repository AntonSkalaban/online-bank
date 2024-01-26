import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductNumber } from "helpers";
import { OperationsData } from "type";
import { Typography } from "components/UI";
import FavIcon from "assets/svg/fav-icon.svg";
import "./style.css";

interface FavItemProps {
  data: Omit<OperationsData, "_id">;
}

export const FavItem: React.FC<FavItemProps> = ({ data }) => {
  const navigate = useNavigate();

  const { category, topUpBy, fromCard, topUpNumber } = data;

  const handleClick = () => {
    navigate(`/transfer/${category}`, {
      state: { topUpBy, fromCard, topUpNumber },
    });
  };

  return (
    <li className="fav-item" onClick={handleClick}>
      <div className="fav-item__img-container ">
        <img src={FavIcon} />
      </div>
      <Typography size="small">
        To {topUpBy} •••
        {ProductNumber.showLatestNumbers(topUpNumber)}
      </Typography>
    </li>
  );
};
