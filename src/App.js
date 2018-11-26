import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import AppHeader from "./components/AppHeader";
import AppDrawer from "./components/AppDrawer";
import AllMinecraftVersionsPage from "./pages/AllMinecraftVersions";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Fragment>
      <AppHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <AppDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Switch>
        <Route path="/minecraft" exact component={AllMinecraftVersionsPage} />
        <Redirect from="/" exact to="/minecraft" />
      </Switch>
    </Fragment>
  );
};

export default App;
