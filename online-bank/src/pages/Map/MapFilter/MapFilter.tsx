import React from "react";
import { useFormContext } from "react-hook-form";
import { Typography, Checkbox } from "components/UI";
import "./style.css";

interface MapFilterProps {
  data: { value: string; title: string }[];
}
export const MapFilter: React.FC<MapFilterProps> = ({ data }) => {
  const { register } = useFormContext();

  return (
    <form className="map__filter">
      {data.map(({ value, title }) => {
        return (
          <Checkbox
            key={value}
            name="mapObjects"
            value={value}
            register={register}
          >
            <Typography size="big" color="black">
              {title}
            </Typography>
          </Checkbox>
        );
      })}
    </form>
  );
};
