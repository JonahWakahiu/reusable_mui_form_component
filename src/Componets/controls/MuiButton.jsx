import { Button } from "@mui/material";
import React from "react";

const root = {
  margin: 0.5,
};

export default function MuiButton(props) {
  const { color, variant, onClick, text, size, ...other } = props;
  return (
    <Button
      sx={root}
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other} 
    >
      {text}
    </Button>
  );
}
