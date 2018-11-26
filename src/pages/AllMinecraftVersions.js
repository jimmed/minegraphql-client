import React from "react";
import { Container } from "semantic-ui-react";
import useAllMinecraftVersions from "../hooks/useAllMinecraftVersions";
import MinecraftVersionsList from "../components/MinecraftVersionsList";
import hookedPage from "./hookedPage";

const AllVersionsPage = ({ minecraftVersions }) => (
  <Container>
    <MinecraftVersionsList minecraftVersions={minecraftVersions} />
  </Container>
);

export default hookedPage(() => useAllMinecraftVersions(), AllVersionsPage);
