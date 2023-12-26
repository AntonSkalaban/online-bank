import React, { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FormValues } from "type";
import { Typography } from "..";
import "./style.css";

interface CheckboxProps {
  name: string;
  label?: string;
  children?: ReactNode;
  value?: string;
  register:
    | UseFormRegister<FormValues>
    | UseFormRegister<Record<string, string[]>>;
  errors?: FieldErrors<FieldValues>;
  isRequired?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  children,
  value,
  register,
  errors,
  isRequired = false,
}) => {
  return (
    <>
      <label className="checkbox">
        <input
          type="checkbox"
          value={value}
          {...register(name, {
            required: isRequired ? "Is required" : "",
          })}
        />
        <span className="checkmark"></span>
        {label || children}
      </label>
      {errors && (
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
      )}
    </>
  );
};
