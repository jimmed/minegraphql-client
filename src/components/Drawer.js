import React from "react";
import { withStyles } from "@material-ui/core/styles";
import UIDrawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

const Drawer = ({
  classes,
  theme,
  container,
  children,
  drawerOpen,
  setDrawerOpen
}) => (
  <nav className={classes.drawer}>
    <UIDrawer
      container={container}
      variant="temporary"
      anchor={theme && theme.direction === "rtl" ? "right" : "left"}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
    >
      {children}
    </UIDrawer>
  </nav>
);

export default withStyles(styles, { withTheme: true })(Drawer);
