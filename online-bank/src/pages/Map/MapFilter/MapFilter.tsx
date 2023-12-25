import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAction } from "hooks";
import { FormValues } from "type";
import { data } from "./const";
import { Typography, Checkbox } from "components/UI";
import "./style.css";

export const MapFilter = () => {
  const { updateMapFilter } = useAction();

  const { register, watch } = useForm({
    defaultValues: {
      banks: true,
      atms: true,
    } as FormValues,
    criteriaMode: "all",
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (!name) return;
      updateMapFilter({ [name]: value[name] } as { string: boolean });
    });

    return () => subscription.unsubscribe();
  }, [updateMapFilter, watch]);

  return (
    <div className="map__filter">
      {data.map(({ name, title }) => {
        return (
          <Checkbox key={name} name={name} register={register}>
            <Typography size="big" color="black">
              {title}
            </Typography>
          </Checkbox>
        );
      })}
    </div>
  );
};
