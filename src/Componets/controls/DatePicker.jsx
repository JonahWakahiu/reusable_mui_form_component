import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CustomDatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParams = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name={name}
        label={label}
        formate="MMM/dd/yyyy"
        onChange={(date) => convertToDefaultEventParams(name, date)}
      />
    </LocalizationProvider>
  );
}
