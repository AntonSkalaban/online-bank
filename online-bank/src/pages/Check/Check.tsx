import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { historyAPI } from "services/api";
import { OperationsData } from "type";
import { Button } from "components/UI";
import { PaperCheck } from "./PaperCheck/PaperCheck";
import "./style.css";

export const Check = () => {
  const location = useLocation();

  const [addToHistory] = historyAPI.useAddHistoryMutation();

  useEffect(() => {
    return () => {
      addToHistory(operationsData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const operationsData = location.state as Omit<OperationsData, "_id">;

  const hanldeClick = () => {
    operationsData.isFavorite = true;
    operationsData.name = `${operationsData.category} ${operationsData.topUpNumber}`;
  };

  if (!operationsData) return <p>Error...</p>;

  return (
    <div className="page check-page">
      <div className="check-page__container">
        <PaperCheck data={operationsData} />

        <div className="check__btns-container">
          <Button
            size="big"
            color="green"
            title="Add to favorite"
            clickHandler={hanldeClick}
          />
        </div>
      </div>
    </div>
  );
};
