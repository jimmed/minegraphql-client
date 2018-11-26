import React from "react";
import { Switch, Route, Redirect } from "react-router";
import AllMinecraftVersionsPage from "./pages/AllMinecraftVersions";
import MinecraftVersionPage from "./pages/MinecraftVersion";

const App = () => (
  <Switch>
    <Route path="/minecraft" exact component={AllMinecraftVersionsPage} />
    <Route path="/minecraft/:versionId" component={MinecraftVersionPage} />
    <Redirect from="/" exact to="/minecraft" />
  </Switch>
);

export default App;
