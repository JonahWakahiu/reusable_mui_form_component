import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Componets/PageHeader";
import { GroupOutlined } from "@mui/icons-material";
import { Paper } from "@mui/material";

const pageContent = {
  margin: 5,
  padding: 3,
};

export default function Employees() {
  return (
    <>
      <PageHeader
        title="New employee"
        subTitle="Form design with validation"
        icon={<GroupOutlined fontSize="large" />}
      />
      <Paper sx={pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}
