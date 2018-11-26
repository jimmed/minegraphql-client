import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const AppHeader = ({ drawerOpen, setDrawerOpen }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        Minegraphql Client
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
