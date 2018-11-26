import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo-hooks";
import apolloClient from "./apolloClient";
import App from "./App";
import "./styles.css";

const appContainer = (
  <ApolloProvider client={apolloClient}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(appContainer, rootElement);
