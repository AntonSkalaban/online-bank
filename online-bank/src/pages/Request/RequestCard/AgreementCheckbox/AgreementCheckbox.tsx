import React from "react";
import { Checkbox } from "components";
import { Typography } from "components/UI";

interface AgreementCheckboxProps {
  isChecked: boolean;
  handleChanhe: () => void;
}
export const AgreementCheckbox: React.FC<AgreementCheckboxProps> = ({
  isChecked,
  handleChanhe,
}) => {
  return (
    <>
      <Checkbox
        name={"agreements"}
        isChecked={isChecked}
        selectHandler={handleChanhe}
      >
        <Typography>
          I hereby agree to the{" "}
          <Typography color="green">Rewards and terms of service</Typography>
        </Typography>
      </Checkbox>

      {!isChecked && (
        <Typography color="red">You need to confirm your consent</Typography>
      )}
    </>
  );
};
