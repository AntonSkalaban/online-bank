import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { CardFilter } from "./CardFilter/CardFilters";
import { Typography, Checkbox } from "components/UI";
import "./style.css";

export const CardCreationForm = () => {
  const { trigger } = useFormContext();

  useEffect(() => {
    trigger("isSubmit");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="creation-form">
      <CardFilter />
      <Checkbox name="isSubmit" isRequired={true}>
        <Typography>I hereby agree to the </Typography>
        <Typography color="green">Rewards and terms of service</Typography>
      </Checkbox>
    </div>
  );
};
