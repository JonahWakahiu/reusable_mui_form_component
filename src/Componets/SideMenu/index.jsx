import { Box } from "@mui/material";
import React from "react";

const root = {
  height: "100%",
  width: "250px",
  backgroundColor: "success.light",
  left: "0",
  position: "absolute",
};

export default function SideMenu() {
  return <Box sx={root}></Box>;
}
