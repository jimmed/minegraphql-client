import React from "react";
import { Container } from "semantic-ui-react";
import useMinecraftVersion from "../hooks/useMinecraftVersion";
import MinecraftVersionDetail from "../components/MinecraftVersionDetail";
import hookedPage from "./hookedPage";

const MinecraftVersion = ({ minecraftVersion }) => (
  <Container>
    <MinecraftVersionDetail minecraftVersion={minecraftVersion} />
  </Container>
);

export default hookedPage(
  ({ match }) => useMinecraftVersion(match.params.versionId),
  MinecraftVersion
);
