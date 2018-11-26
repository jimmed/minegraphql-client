import React from "react";
import useAllMinecraftVersions from "../hooks/useAllMinecraftVersions";
import MinecraftVersionsList from "../components/MinecraftVersionsList";
import hookedPage from "./hookedPage";

const AllVersionsPage = ({ minecraftVersions }) => (
  <main>
    <MinecraftVersionsList minecraftVersions={minecraftVersions} />
  </main>
);

export default hookedPage(useAllMinecraftVersions, AllVersionsPage);
