import { Card, Paper, Typography, Box } from "@mui/material";
import React from "react";

const root = {
  backgroundColor: "#fdfdfd",
};

const pageHeader = {
  padding: 2,
  display: "flex",
  mb: 2,
};

const pageIcon = {
  display: "inline-block",
  padding: 2,
  color: "#3c44b1",
};

const pageTitle = {
  paddingLeft: 1,
  "& .MuiTypography-subtitle2": {
    opacity: "0.7",
  },
};

export default function PageHeader(props) {
  const { icon, title, subTitle } = props;
  return (
    <Paper square elevation={0} sx={root}>
      <Box sx={pageHeader}>
        <Card sx={pageIcon}>{icon}</Card>
        <Box sx={pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
