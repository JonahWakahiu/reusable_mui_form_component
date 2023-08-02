import { Box, CssBaseline } from "@mui/material";
import SideMenu from "./Componets/SideMenu";
import Employees from "./Pages/Employees/Employees";
import Header from "./Componets/Header";

const mainContent = {
  width: "100%",
  paddingLeft: "250px",
  backgroundColor: "grey.300",
};

function App() {
  return (
    <>
      <SideMenu />
      <Box sx={mainContent}>
        <Header />
        <Employees />
      </Box>
      <CssBaseline />
    </>
  );
}

export default App;
