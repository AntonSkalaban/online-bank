import React from "react";
import { SectionHeader, Wrapper } from "components/UI";
import { HistoryList } from "./HistoryList/HistoryList";

export const History = () => {
  return (
    <div className="page history-page">
      <Wrapper>
        <SectionHeader size="big" title="History" />
        <HistoryList />
      </Wrapper>
    </div>
  );
};
