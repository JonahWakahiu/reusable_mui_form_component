import { Box } from "@mui/material";
import React, { useState } from "react";

export function useForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

const root = {
  "& .MuiFormControl-root": {
    width: "80%",
    m: 1,
  },
};

export function Form(props) {
  return (
    <Box sx={root} component="form" autoComplete="off">
      {props.children}
    </Box>
  );
}
