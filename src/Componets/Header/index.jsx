import { Message, NotificationsNone, Search } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import React from "react";

const root = {
  backgroundColor: "#fff",
  transform: "translateZ(0)",
};

const searchInput = {
  opacity: "0.6",
  padding: "0px 8px",
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: "#f2f2f2",
    border: "1px solid grey",
  },
  "& .MuiSvgIcon-root": {
    marginRight: 1,
  },
};

export default function Header() {
  return (
    <AppBar position="static" sx={root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              sx={searchInput}
              placeholder="Search..."
              startAdornment={<Search fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <Message />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
