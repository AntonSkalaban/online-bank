import React from "react";
import { historyAPI } from "services/api";
import { tranformData } from "helpers";
import { Typography } from "components/UI";
import { OperationsList } from "./OperationsList/OperationsList";
import "./style.css";

export const HistoryList = () => {
  const { data, isFetching } = historyAPI.useGetHistoryQuery("favorite");

  if (!data) return;
  if (isFetching) return;

  const groupedByDateData = tranformData(data);

  return (
    <ul className="history__list">
      {Object.keys(groupedByDateData).map((date) => {
        return (
          <li key={date}>
            <Typography>{date}</Typography>
            <OperationsList key={date} operations={groupedByDateData[date]} />
          </li>
        );
      })}
    </ul>
  );
};
