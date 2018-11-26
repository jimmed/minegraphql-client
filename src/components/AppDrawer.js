import React from "react";
import { withRouter } from "react-router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "./Drawer";

const links = [
  { to: "/minecraft", label: "Minecraft Versions" },
  { to: "/forge", label: "Forge Versions" }
];

const AppDrawer = ({ drawerOpen, setDrawerOpen, history }) => (
  <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}>
    <List>
      {links.map(({ to, label }) => (
        <ListItem
          button
          key={to}
          onClick={() => {
            history.push(to);
            setDrawerOpen(false);
          }}
        >
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default withRouter(AppDrawer);
