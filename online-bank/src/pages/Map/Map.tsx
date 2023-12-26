import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { data } from "./const";
import { MapFilter } from "./MapFilter/MapFilter";
import { YMap } from "./YMap/YMap";
import { GoBack, Wrapper } from "components/UI";

export const Map = () => {
  const methods = useForm({
    defaultValues: {
      mapObjects: data.map((el) => el.value),
    },
    criteriaMode: "all",
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <GoBack />
        <MapFilter data={data} />
        <YMap />
      </Wrapper>
    </FormProvider>
  );
};
