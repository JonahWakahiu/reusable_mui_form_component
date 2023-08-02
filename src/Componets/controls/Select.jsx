import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function CustomSelect(props) {
  const { name, value, label, onChange, options } = props;
  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.title}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
