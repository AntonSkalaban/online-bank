import React from "react";
import { useSelector } from "react-redux";
import { getMapFilters } from "store/selectors";
import { useAction } from "hooks";
import { Checkbox } from "components";
import { Typography } from "components/UI";
import { data } from "./const";
import "./style.css";

export const MapFilter = () => {
  const { updateMapFilter } = useAction();

  const mapFilters = useSelector(getMapFilters);

  return (
    <div className="map__filter">
      {data.map(({ name, title }) => {
        return (
          <Checkbox
            name={name}
            isChecked={mapFilters[name as "banks" | "atms"]}
            selectHandler={updateMapFilter}
            key={name}
          >
            <Typography size="big" color="black">
              {title}
            </Typography>
          </Checkbox>
        );
      })}
    </div>
  );
};
