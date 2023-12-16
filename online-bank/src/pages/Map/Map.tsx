import React from "react";
import { YMap } from "./YMap/YMap";
import { GoBack, Wrapper } from "components/UI";
import { MapFilter } from "./MapFilter/MapFilter";

export const Map = () => {
  return (
    <Wrapper>
      <GoBack />
      <MapFilter />
      <YMap />
    </Wrapper>
  );
};
