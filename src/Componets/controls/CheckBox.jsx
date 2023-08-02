import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";

export default function CustomCheckBox(props) {
  const { name, checked, label, onChange } = props;

  const convertToDefaultEventParams = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          color="primary"
          checked={checked}
          onChange={(e) =>
            onChange(convertToDefaultEventParams(name, e.target.checked))
          }
        />
      }
      label={label}
    />
  );
}
