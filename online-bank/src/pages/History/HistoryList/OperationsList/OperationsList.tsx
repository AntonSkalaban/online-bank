import React from "react";
import { useNavigate } from "react-router-dom";
import { MyDate, Text, ProductNumber } from "helpers";
import { OperationsData } from "type";
import { Typography } from "components/UI";
import Marker from "assets/svg/marker.svg";
import "./style.css";

interface OperationsListProps {
  operations: OperationsData[];
}
export const OperationsList: React.FC<OperationsListProps> = ({
  operations,
}) => {
  const navigate = useNavigate();

  const handleClick = (state: OperationsData) => {
    navigate("/check", {
      state,
    });
  };

  return (
    <ul className="history__operations-list">
      {operations.map((operation, indx) => {
        const { _id, date, category, topUpNumber, fromCard, amount } =
          operation;
        return (
          <li
            className="history__item"
            key={_id}
            onClick={() => {
              handleClick(operation);
            }}
          >
            <div className="history__item-time">
              {indx + 1 < operations.length && (
                <div className="history__item-line"></div>
              )}
              <div className="history__img-container">
                {" "}
                <img src={Marker} />
              </div>
              <Typography>{MyDate.getTime(date)}</Typography>
            </div>

            <div className="history__desctiption">
              <div className="history__top-row">
                <Typography size="big" weight="strong" color="black">
                  {Text.tranformName(category)}/{topUpNumber}
                </Typography>
                <Typography size="big" weight="strong" color="black">
                  {amount} {fromCard.currency}
                </Typography>
              </div>
              <div className="history__bottom-row">
                <Typography>
                  {ProductNumber.showExtremeNumbers(fromCard.number)}
                </Typography>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
