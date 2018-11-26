import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://minegraphql.herokuapp.com/"
});

export default apolloClient;
