import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useGetCourse } from "hooks";
import { Course } from "helpers";
import { FormValues } from "type";
import { Typography, Checkbox } from "components/UI";

interface ExchangeBlockProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
}
export const ExchangeBlock: React.FC<ExchangeBlockProps> = ({
  register,
  errors,
}) => {
  const {
    selectCards: { fromCard, toCard },
  } = useSelector(getTransferFormData);

  const course = useGetCourse(toCard.currency, fromCard.currency);

  return (
    <>
      {course && (
        <Typography>
          1 {toCard.currency} ={" "}
          {Course.getBankCourse(course, "sale").toFixed(3)} {fromCard.currency}
        </Typography>
      )}
      <Checkbox
        name="isCheckboxSubmit"
        register={register}
        errors={errors}
        isRequired={true}
      >
        <Typography>I agree with the courses *</Typography>
      </Checkbox>
    </>
  );
};
