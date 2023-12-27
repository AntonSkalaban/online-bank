import React from "react";
import { useFormContext } from "react-hook-form";
import { useGetCourse } from "hooks";
import { Course } from "helpers";
import { Typography, Checkbox } from "components/UI";

export const ExchangeBlock = () => {
  const { watch } = useFormContext();

  const [fromCard, toCard] = watch([
    "selectCards.fromCard",
    "selectCards.toCard",
  ]);

  const course = useGetCourse(toCard.currency, fromCard.currency);

  return (
    <>
      {course && (
        <Typography>
          1 {toCard.currency} ={" "}
          {Course.getBankCourse(course, "sale").toFixed(3)} {fromCard.currency}
        </Typography>
      )}
      <Checkbox name="isCheckboxSubmit" isRequired={true}>
        <Typography>I agree with the courses *</Typography>
      </Checkbox>
    </>
  );
};
