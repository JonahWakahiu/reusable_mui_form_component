import {
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import React from "react";

export default function RadioGroup(props) {
  const { name, value, label, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
