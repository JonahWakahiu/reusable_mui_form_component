import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useForm, Form } from "../../Componets/useForm";
import { Controls } from "../../Componets/controls/Controls";
import * as employees from "../../services/EmployeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  department: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            value={values.email}
            label="Email"
            name="email"
            onChange={handleInputChange}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            value={values.city}
            label="City"
            name="city"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.CustomSelect
            name="department"
            label="Department"
            value={values.department}
            onChange={handleInputChange}
            options={employees.getDepartmentCollection}
          />
          <Controls.CustomDatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CustomCheckBox
            name="isPermanent"
            label="isPermanent"
            checked={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.MuiButton text="Submit" type="submit" />
            <Controls.MuiButton
              text="reset"
              sx={{
                backgroundColor: "grey",
                "&:hover": { backgroundColor: "#aaa" },
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
