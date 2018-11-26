import React from "react";
import { Container, Segment } from "semantic-ui-react";

const LoadingPage = () => (
  <Container>
    <Segment padded loading massive />
  </Container>
);

export default LoadingPage;
