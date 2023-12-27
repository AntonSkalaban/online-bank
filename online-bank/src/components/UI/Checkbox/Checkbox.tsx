import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { InputError } from "..";
import "./style.css";

interface CheckboxProps {
  name: string;
  children?: ReactNode;
  value?: string;
  isRequired?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  value,
  isRequired = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
        {children}
      </label>
      {errors && <InputError name={name} errors={errors} />}
    </>
  );
};
