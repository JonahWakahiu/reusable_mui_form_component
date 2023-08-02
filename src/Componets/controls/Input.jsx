import React from "react";
import { TextField } from "@mui/material";

export default function Input(props) {
  const { value, name, onChange, label } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
