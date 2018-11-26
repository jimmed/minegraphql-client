import React from "react";
import { Segment, Header } from "semantic-ui-react";

const MinecraftVersionDetail = ({ minecraftVersion }) => (
  <Segment>
    <Header>Minecraft Version {minecraftVersion.id}</Header>
  </Segment>
);

export default MinecraftVersionDetail;
