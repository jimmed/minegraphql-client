import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const minecraftVersion = gql`
  query getMinecraftVersion($id: ID!) {
    minecraftVersion(id: $id) {
      id
      releaseChannel
      releasedAt
    }
  }
`;

const useMinecraftVersion = id =>
  useQuery(minecraftVersion, { variables: { id } });

export default useMinecraftVersion;
