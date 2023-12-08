import React from "react";
import { useSelector } from "react-redux";
import { getTransferFormData } from "store/selectors";
import { useAction, useGetCourse } from "hooks";
import { Course } from "helpers";
import { Typography } from "components/UI";
import { Checkbox } from "components";

export const ExchangeBlock = () => {
  const { updateForm } = useAction();

  const {
    isCheckboxSubmit,
    errors: { isSubmitError },
    selectCards: { fromCard, toCard },
  } = useSelector(getTransferFormData);

  const course = useGetCourse(fromCard.currency, toCard.currency);

  return (
    <>
      {course && (
        <Typography>
          1 {toCard.currency} = {Course.getBankCourse(course, "sale")}{" "}
          {fromCard.currency}
        </Typography>
      )}
      <Checkbox
        name="isCheckboxSubmit"
        isChecked={isCheckboxSubmit}
        selectHandler={updateForm}
      >
        <Typography>I agree with the courses *</Typography>
      </Checkbox>
      {isSubmitError && <Typography color="red" text="Submit" />}
    </>
  );
};
