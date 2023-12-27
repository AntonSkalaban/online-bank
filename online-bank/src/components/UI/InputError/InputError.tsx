import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Typography } from "../Typography/Typography";
import { FieldErrors, FieldValues } from "react-hook-form";

interface InputErrorProps {
  name: string;
  errors: FieldErrors<FieldValues>;
}
export const InputError: React.FC<InputErrorProps> = ({ name, errors }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return messages
          ? Object.entries(messages).map(([type, message]) => (
              <Typography color="red" key={type}>
                {message}
              </Typography>
            ))
          : null;
      }}
    />
  );
};
